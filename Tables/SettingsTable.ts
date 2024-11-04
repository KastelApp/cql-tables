import Constants from "@/Constants.ts";
import createTable from "@/utils/cql/DB/createTable";
import type { ExtractTypesFromCreateTable } from "@/utils/cql/DB/createTableTypes";

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
        tokens: ["frozen<tokensType>"],
        theme: "string",
        language: "string",
        privacy: "int",
        maxGuilds: "int",
        maxFileUploadSize: "int",
        guildOrder: ["frozen<guildOrderType>"],
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
        guildOrderType: {
            guildId: "string",
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
