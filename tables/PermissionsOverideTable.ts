import createTable from "@/utils/cql/db/createTable";
import type { ExtractTypesFromCreateTable } from "@/utils/cql/db/createTableTypes";

export const permissionsOverridesTable = createTable({
    primaryKeys: ["permissionId"],
    indexes: [["permissions_overides_id", "id"]],
    tableName: "permissionsOverrides",
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
        // ? permission id is the unique id for the permission override
        permissionId: "string",
        // ? id is the id for the override, i.e the user, role etc. You probably shouldn't query this directly
        id: "string",
        allow: "list<frozen<bigintPair>>",
        deny: "list<frozen<bigintPair>>",
        type: "int",
        editable: "boolean",
        slowmode: "int"
    },
    types: {
        bigintPair: {
            first: "bigint",
            second: "bigint"
        }
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

export type PermissionsOverridesTable = ExtractTypesFromCreateTable<typeof permissionsOverridesTable>;
