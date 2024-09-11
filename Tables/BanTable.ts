import createTable from "@/Utils/Cql/DB/createTable";
import type { ExtractTypesFromCreateTable } from "@/Utils/Cql/DB/createTableTypes";

export const bansTable = createTable({
    primaryKeys: ["guildId", "userId"],
    tableName: "bans",
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
        bannerId: "string",
        reason: "string",
        bannedDate: "timestamp",
        unbanDate: "timestamp"
    },
    with: {
        bloomFilterFpChance: 0.01,
        caching: {
            keys: "ALL",
            rowsPerPartition: "NONE"
        },
        compaction: {
            class: "org.apache.cassandra.db.compaction.LeveledCompactionStrategy",
            sstableSizeInMb: "160"
        },
        compression: {
            chunkLengthKb: 64,
            sstableCompression: "org.apache.cassandra.io.compress.LZ4Compressor"
        },
        crcCheckChance: 1,
        dclocalReadRepairChance: 0.1,
        defaultTimeToLive: 0,
        gcGraceSeconds: 86_400,
        maxIndexInterval: 2_048,
        memtableFlushPeriodInMs: 0,
        minIndexInterval: 128,
        readRepairChance: 0,
        speculativeRetry: "99PERCENTILE"
    },
    version: 1
});

export type BanTable = ExtractTypesFromCreateTable<typeof bansTable>;
