import createTable from "@/Utils/Classes/DB/createTable.ts";
import type { ExtractTypesFromCreateTable } from "@/Utils/Classes/DB/createTableTypes.ts";

export const messagesTable = createTable({
    primaryKeys: [["channelId", "bucket"], "messageId"],
    tableName: "messages",
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
        messageId: "bigint",
        authorId: "string",
        content: "string",
        allowedMentions: "int",
        updatedDate: "timestamp",
        channelId: "string",
        bucket: "string",
        flags: "int",
        mentions: ["string"],
        mentionRoles: ["string"],
        mentionChannels: ["string"],
        embeds: ["frozen<embed>"],
        attachments: ["string"],
        replyingTo: "string"
    },
    types: {
        embedFiles: {
            name: "string",
            url: "string"
        },
        embedFooter: {
            text: "string",
            iconUrl: "string",
            timestamp: "timestamp"
        },
        embedField: {
            name: "string",
            value: "string",
            inline: "boolean"
        },
        embedAuthor: {
            name: "string",
            iconUrl: "string",
            url: "string"
        },
        embedThumbnail: {
            placeholder: "string",
            url: "string"
        },
        embed: {
            title: "string",
            description: "string",
            url: "string",
            color: "int",
            type: "string", // ? Note: we are assuming we validate this when adding the row
            files: ["frozen<embedFiles>"],
            footer: "frozen<embedFooter>",
            fields: ["frozen<embedField>"],
            author: "frozen<embedAuthor>",
            thumbnail: "frozen<embedThumbnail>"
        }
    },
    with: {
        clusteringOrder: "ORDER BY (message_id DESC)",
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
        gcGraceSeconds: 864_000,
        maxIndexInterval: 2_048,
        memtableFlushPeriodInMs: 0,
        minIndexInterval: 128,
        readRepairChance: 0,
        speculativeRetry: "99PERCENTILE"
    },
    version: 1
});

export type MessageTable = ExtractTypesFromCreateTable<typeof messagesTable>;
