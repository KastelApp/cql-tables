import createTable from "@/Utils/Classes/DB/createTable.ts";
import type { ExtractTypesFromCreateTable } from "@/Utils/Classes/DB/createTableTypes.ts";

export const botsTable = createTable({
    primaryKeys: ["userId"],
    tableName: "bots",
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
        userId: "string",
        name: "string",
        description: "string",
        avatar: "string",
        summary: "string",
        ownerId: "string"
    },
    with: {
        bloomFilterFpChance: 0.01,
        caching: {
            keys: "ALL",
            rowsPerPartition: "NONE"
        },
        compaction: {
            class: "org.apache.cassandra.db.compaction.LeveledCompactionStrategy"
        },
        compression: {
            sstableCompression: "org.apache.cassandra.io.compress.LZ4Compressor"
        },
        crcCheckChance: 1,
        dclocalReadRepairChance: 0.1,
        defaultTimeToLive: 0,
        gcGraceSeconds: 86_400,
        memtableFlushPeriodInMs: 0,
        speculativeRetry: "99PERCENTILE"
    },
    version: 1
});

export type BotTable = ExtractTypesFromCreateTable<typeof botsTable>;
