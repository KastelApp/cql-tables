import createTable from "@/Utils/Classes/DB/createTable.ts";
import type { ExtractTypesFromCreateTable } from "@/Utils/Classes/DB/createTableTypes.ts";

export const filesTable = createTable({
    primaryKeys: ["fileId"],
    indexes: [["file_hash_idx", "hash"], ["file_for_id_idx", "forId"]],
    tableName: "files",
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
        fileId: "string",
        forId: "string",
        name: "string",
        type: "string",
        deleted: "boolean",
        uploaded: "boolean",
        uploadedAt: "Date",
        uploadedBy: "string",
        hash: "string"
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

export type FileTable = ExtractTypesFromCreateTable<typeof filesTable>;
