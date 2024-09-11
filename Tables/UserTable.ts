import createTable from "@/Utils/Cql/DB/createTable";
import type { ExtractTypesFromCreateTable } from "@/Utils/Cql/DB/createTableTypes";
import Encryption from "@/Utils/Classes/Encryption.ts";

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
        1: {
            fields: ["username", "tag", "usernameTag"],
            changes: "This adds usernameTag to the table.",
            migrate: (_, data: {
                username: string;
                tag: string;
                usernameTag: string | null
            }) => {
                const decryptedUsername = Encryption.decrypt(data.username);
                
                return {
                    username: data.username,
                    tag: data.tag,
                    usernameTag: Encryption.encrypt(`${decryptedUsername}#${data.tag}`)
                }
            },
        }
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
        globalNickname: "string",
        usernameTag: "string",
        oauth2: ["frozen<oauthConnections>"],
        banner: "string"
    },
    types: {
        tokenPair: {
            refreshToken: "string",
            accessToken: "string",
            expiresAt: "timestamp",
            scopes: ["string"]
        },
        oauthConnections: {
            authorizedAt: "timestamp",
            applicationId: "string",
            tokens: ["frozen<tokenPair>"]
        }
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
    version: 2
});

export type UserTable = ExtractTypesFromCreateTable<typeof usersTable>;
