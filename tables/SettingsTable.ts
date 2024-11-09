import Constants from "@/Constants.ts";
import createTable from "@/utils/cql/db/createTable";
import type { ExtractTypesFromCreateTable } from "@/utils/cql/db/createTableTypes";

export const settingsTable = createTable({
    primaryKeys: ["userId"],
    tableName: "settings",
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
        1: {
            fields: ["maxFileUploadSize"],
            changes: "This changes the maxFileUploadSize to the new value.",
            migrate: (_, data: {
                maxFileUploadSize: number
            }) => {
                data.maxFileUploadSize = Constants.settings.Max.MaxFileSize;
                
                return data;
            }
        }
    },
    columns: {
        userId: "string",
        status: "int",
        customStatus: "string",
        bio: "string",
        shortBio: "string", // ? The difference between bio and shortBio is simple, bio is longer, supports more markdown features and only shows when the large user popout is active
        tokens: ["frozen<tokensType>"],
        theme: "string",
        language: "string",
        privacy: "int",
        maxHubs: "int",
        maxFileUploadSize: "int",
        hubOrder: ["frozen<hubOrderType>"],
        allowedInvites: "int",
        navLocation: "string",
        emojiPack: "string"
    },
    types: {
        tokensType: {
            token: "string",
            createdDate: "timestamp",
            ip: "string",
            flags: "int",
            tokenId: "string"
        },
        hubOrderType: {
            hubId: "string",
            position: "int"
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
    version: 2
});

export type SettingsTable = ExtractTypesFromCreateTable<typeof settingsTable>;
