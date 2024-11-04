import createTable from "@/utils/cql/DB/createTable";
import type { ExtractTypesFromCreateTable } from "@/utils/cql/DB/createTableTypes";

export const platformInviteTable = createTable({
    primaryKeys: ["code"],
    indexes: [["platform_invite_creator_id_idx", "creatorId"]],
    tableName: "platformInvite",
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
        code: "string",
        creatorId: "string",
        expiresAt: "timestamp",
        usedById: "string",
        usedAt: "timestamp"
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
        gcGraceSeconds: 300,
        maxIndexInterval: 2_048,
        memtableFlushPeriodInMs: 0,
        minIndexInterval: 128,
        readRepairChance: 0,
        speculativeRetry: "99PERCENTILE"
    },
    version: 1
});

export type PlatformInviteTable = ExtractTypesFromCreateTable<typeof platformInviteTable>;
