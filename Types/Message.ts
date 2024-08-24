import { Embed } from "@/Types/Embed.ts";

interface Author {
	iconUrl: string;
	name: string;
}

interface Footer {
	text: string;
	timestamp: Date;
}

interface Field {
	description: string;
	title: string;
}

interface MainObject {
	author: Author;
	color: string;
	description: string;
	fields: Field[];
	footer: Footer;
	imageUrl: string;
	thumbnailUrl: string;
	title: string;
	url: string;
}

interface Messages {
	allowedMentions: number;
	attachments: string[];
	authorId: string;
	bucket: string;
	channelId: string;
	content: string;
	embeds: Embed[];
	flags: number;
	mentionChannels: string[];
	mentionRoles: string[];
	mentions: string[];
	messageId: bigint | string;
	replyingTo: string | null;
	updatedDate: Date | null;
}

export default Messages;

export type { Author, Footer, Field, MainObject };
