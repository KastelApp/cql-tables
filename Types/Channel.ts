interface Channels {
	allowedMentions: number;
	channelId: string;
	children: string[];
	description: string | null;
	guildId: string;
	name: string;
	nsfw: boolean;
	parentId: string;
	permissionsOverrides: string[];
	position: number;
	slowmode: number;
	type: number;
}

export default Channels;
