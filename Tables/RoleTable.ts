import createTable from "@/Utils/Classes/DB/createTable.ts";
import type { ExtractTypesFromCreateTable } from "@/Utils/Classes/DB/createTableTypes.ts";

export const rolesTable = createTable({
    primaryKeys: ["guildId", "roleId"],
    tableName: "roles",
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
        roleId: "string",
        guildId: "string",
        name: "string",
        allowedAgeRestricted: "boolean",
        deleteable: "boolean",
        mentionable: "boolean",
        hoisted: "boolean",
        color: "int",
        permissions: ["frozen<bigintPair>"],
        position: "int"
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

export type RoleTable = ExtractTypesFromCreateTable<typeof rolesTable>;
