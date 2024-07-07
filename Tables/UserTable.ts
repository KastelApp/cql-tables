import createTable from "@/Utils/Classes/DB/createTable.ts";
import type { ExtractTypesFromCreateTable } from "@/Utils/Classes/DB/createTableTypes.ts";

export const usersTable = createTable({
    primaryKeys: ["userId"],
    indexes: [["users_email_idx", "email"], ["users_username_idx", "username"], ["users_tag_idx", "tag"]],
    tableName: "users",
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
        email: "string",
        username: "string",
        tag: "string",
        avatar: "string",
        password: "string",
        phoneNumber: "string",
        twoFaSecret: "string",
        ips: ["string"],
        publicFlags: "string",
        flags: "string",
        guilds: ["string"],
        globalNickname: "string"
    },
    with: {
        bloomFilterFpChance: 0.01,
        caching: {
            keys: "ALL",
            rowsPerPartition: "ALL"
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
    version: 1
});

export type UserTable = ExtractTypesFromCreateTable<typeof usersTable>;
