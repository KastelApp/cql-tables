import createTable from "@/utils/cql/db/createTable";
import type { ExtractTypesFromCreateTable } from "@/utils/cql/db/createTableTypes";
import { hubMembersTable } from "@/utils/cql/tables/HubMemberTable";

export const hubsTable = createTable({
    primaryKeys: ["hubId"],
    indexes: [["hub_owner_id", "ownerId"]],
    tableName: "hubs",
    ifNotExists: true,
    mode: "camelCase",
    migrationScripts: {
        "0": {
            fields: [],
            changes: "This converts a non-versioned table into a versioned table.",
            migrate: (_, data) => {
                return data;
            },
        },
        1: {
            fields: ["members", "hubId"],
            changes: "This counts all a members in a hub, while this is dumb it should be fine since most hubs will have less then 20 members",
            migrate: async (_, data: { hubId: string, members: number }) => {
                const queued = await hubMembersTable.find({
                    hubId: data.hubId,
                    left: false
                });
                
                return {
                    hubId: data.hubId,
                    members: queued.length
                }
            },
        }
    },
    columns: {
        hubId: "string",
        icon: "string",
        name: "string",
        description: "string",
        flags: "int",
        ownerId: "string",
        coOwners: ["string"],
        maxMembers: "int",
        features: ["string"],
        members: "int"
    },
    with: {
        bloomFilterFpChance: 0.01,
        caching: {
            keys: "ALL",
            rowsPerPartition: "10"
        },
        comment: "",
        compaction: {
            class: "org.apache.cassandra.db.compaction.SizeTieredCompactionStrategy",
            maxThreshold: "32",
            minThreshold: "4"
        },
        compression: {
            chunkLengthKb: 64,
            sstableCompression: "org.apache.cassandra.io.compress.LZ4Compressor"
        },
        crcCheckChance: 1,
        dclocalReadRepairChance: 0.1,
        defaultTimeToLive: 0,
        gcGraceSeconds: 21_600,
        maxIndexInterval: 2_048,
        memtableFlushPeriodInMs: 0,
        minIndexInterval: 128,
        readRepairChance: 0,
        speculativeRetry: "99PERCENTILE"
    },
    version: 2
});

export type HubTable = ExtractTypesFromCreateTable<typeof hubsTable>;
