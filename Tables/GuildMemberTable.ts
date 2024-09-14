import createTable from "@/Utils/Cql/DB/createTable";
import type { ExtractTypesFromCreateTable } from "@/Utils/Cql/DB/createTableTypes";

export const guildMembersTable = createTable({
    primaryKeys: ["guildId", "guildMemberId"],
    indexes: [
        ["guild_members_member_id_idx", "userId"],
        ["guild_members_left_idx", "left"],
    ],
    tableName: "guildMembers",
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
        guildId: "string",
        userId: "string",
        roles: ["string"],
        nickname: "string",
        joinedAt: "timestamp",
        timeoutUntil: "timestamp",
        flags: "int",
        timeouts: ["frozen<memberTimeouts>"],
        guildMemberId: "bigint",
        left: "boolean"
    },
    types: {
        memberTimeouts: {
            channelId: "string",
            timeoutUntil: "timestamp"
        }
    },
    with: {
        clusteringOrder: "ORDER BY (guild_member_id ASC)", // ? This is one of the only places where there's still some manual work to be done.
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

export type GuildMemberTable = ExtractTypesFromCreateTable<typeof guildMembersTable>;
