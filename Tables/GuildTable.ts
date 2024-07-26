import createTable from "@/Utils/Classes/DB/createTable.ts";
import type { ExtractTypesFromCreateTable } from "@/Utils/Classes/DB/createTableTypes.ts";
import { guildMembersTable } from "@/Utils/Cql/Tables/GuildMemberTable.ts";

export const guildsTable = createTable({
    primaryKeys: ["guildId"],
    indexes: [["guild_owner_id", "ownerId"]],
    tableName: "guilds",
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
            fields: "*",
            changes: "This counts all a members in a guild, while this is dumb it should be fine since most guilds will have less then 20 members",
            migrate: async (_, data: { guildId: string, members: number }) => {
                const queued = await guildMembersTable.find({
                    guildId: data.guildId,
                    left: false
                }, {
                    allowFiltering: true
                });
                
                return {
                    guildId: data.guildId,
                    members: queued.length
                }
            },
        }
    },
    columns: {
        guildId: "string",
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

export type GuildTable = ExtractTypesFromCreateTable<typeof guildsTable>;
