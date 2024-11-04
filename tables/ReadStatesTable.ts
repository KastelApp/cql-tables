import createTable from "@/utils/cql/db/createTable";
import type { ExtractTypesFromCreateTable } from "@/utils/cql/db/createTableTypes";

export const readStatesTable = createTable({
    primaryKeys: [["channelId", "userId"]],
    tableName: "readStates",
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
        channelId: "string",
        messageId: "string",
        mentions: ["frozen<mentionState>"]
    },
    types: {
        mentionState: {
            messageId: "string",
            userId: "string"
        }
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

export type ReadStateTable = ExtractTypesFromCreateTable<typeof readStatesTable>;
