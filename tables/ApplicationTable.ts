import createTable from "@/utils/cql/db/createTable";
import type { ExtractTypesFromCreateTable } from "@/utils/cql/db/createTableTypes";

export const applicationsTable = createTable({
    primaryKeys: ["applicationId"],
    indexes: ["botId", "ownerId"],
    tableName: "applications",
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
        applicationId: "string",
        botId: "string",
        name: "string",
        description: "string", // ? also is bio since bots cannot edit user settings
        avatar: "string",
        ownerId: "string",
        allowedScopes: "string", // ? private scopes they have access to
        flags: "string",
        redirectUris: ["string"],
        clientSecret: "string"
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

export type ApplicationTable = ExtractTypesFromCreateTable<typeof applicationsTable>;
