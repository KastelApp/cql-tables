import createTable from "@/utils/cql/db/createTable";
import type { ExtractTypesFromCreateTable } from "@/utils/cql/db/createTableTypes";

export const filesTable = createTable({
    primaryKeys: ["fileId"],
    indexes: [["uploader_idx", "uploadedBy"], "uploaded"],
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
        name: "string",
        deleted: "boolean",
        uploadedBy: "string",
        uploaded: "boolean",
        type: "int", // ? 1 = avatar, 2 = file, 3 = hub icon, 4 = banner
        thumbHash: "string", // ? base64 thumbhash only for images ofc
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
