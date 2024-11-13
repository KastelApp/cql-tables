import createTable from "@/utils/cql/db/createTable";
import type { ExtractTypesFromCreateTable } from "@/utils/cql/db/createTableTypes";

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
		replyingTo: "string",
	},
	types: {
		embedFooter: {
			text: "string",
			iconUrl: "string",
			timestamp: "timestamp",
		},
		embedField: {
			name: "string",
			value: "string",
			inline: "boolean",
		},
		embedAuthor: {
			name: "string",
			iconUrl: "string",
			url: "string",
		},
		embedThumbnail: {
			url: "string",
		},
		embedIframeSource: {
			provider: "string",
			url: "string",
		},
		embedProvider: {
			name: "string",
			url: "string",
		},
		embedFiles: {
			name: "string",
			url: "string",
			rawUrl: "string",
			height: "int",
			width: "int",
			type: "string",
			thumbHash: "string"
		},
		embed: {
			title: "string",
			description: "string",
			url: "string",
			color: "int",
			type: "string",
			files: ["frozen<embedFiles>"],
			footer: "frozen<embedFooter>",
			fields: ["frozen<embedField>"],
			author: "frozen<embedAuthor>",
			thumbnail: "frozen<embedThumbnail>",
			iframeSource: "frozen<embedIframeSource>",
			provider: "frozen<embedProvider>",
		},
	},
	with: {
		clusteringOrder: "ORDER BY (message_id DESC)",

		//* Performance Tuning
		bloomFilterFpChance: 0.001,
		caching: {
			keys: "ALL",
			rowsPerPartition: "50",
		},
		speculativeRetry: "99PERCENTILE",
		compaction: {
			class: "org.apache.cassandra.db.compaction.LeveledCompactionStrategy",
			maxThreshold: "32",
			minThreshold: "4",
		},
		compression: {
			chunkLengthKb: 32,
			sstableCompression: "org.apache.cassandra.io.compress.ZstdCompressor",
		},

		//* Consistency and Durability
		gcGraceSeconds: 864_000,
		crcCheckChance: 0.5,

		//* Read Optimization
		dclocalReadRepairChance: 0.1,
		readRepairChance: 0,

		//* Indexing and Access Tuning
		minIndexInterval: 128,
		maxIndexInterval: 1024,

		//* TTL and GC Configuration
		defaultTimeToLive: 31_536_000,
		memtableFlushPeriodInMs: 10_000,
	},
	version: 1,
});

export type MessageTable = ExtractTypesFromCreateTable<typeof messagesTable>;

export type EmbedType = ExtractTypesFromCreateTable<typeof messagesTable>["embeds"][0];
