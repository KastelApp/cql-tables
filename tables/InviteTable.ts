import createTable from "@/utils/cql/db/createTable";
import type { ExtractTypesFromCreateTable } from "@/utils/cql/db/createTableTypes";

export const invitesTable = createTable({
    primaryKeys: ["hubId", "code"],
    indexes: [["invites_channel_id", "channelId"], ["invites_code", "code"]],
    tableName: "invites",
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
    },
    columns: {
        code: "string",
        hubId: "string",
        channelId: "string",
        expires: "timestamp",
        createdAt: "timestamp",
        uses: "int",
        maxUses: "int",
        creatorId: "string",
        deleteable: "boolean",
        type: "int"
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
    version: 1
});

export type InviteTable = ExtractTypesFromCreateTable<typeof invitesTable>;
