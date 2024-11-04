import createTable from "@/utils/cql/DB/createTable";
import type { ExtractTypesFromCreateTable } from "@/utils/cql/DB/createTableTypes";

export const dmsTable = createTable({
    primaryKeys: ["channelId"],
    tableName: "dms",
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
        recipients: ["frozen<dmRecipients>"],
        channelId: "string",
        flags: "number"
    },
    types: {
        dmRecipients: {
            userId: "string",
            flags: "number"
        }
    },
    with: {
        bloomFilterFpChance: 0.01,
        caching: {
            keys: "ALL",
            rowsPerPartition: "ALL"
        },
        compaction: {
            class: "org.apache.cassandra.db.compaction.LeveledCompactionStrategy",
            sstableSizeInMb: "160"
        },
        compression: {
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

export type DmTable = ExtractTypesFromCreateTable<typeof dmsTable>;
