interface Channels {
	ageRestricted: boolean;
	allowedMentions: number;
	channelId: string;
	children: string[];
	description: string | null;
	guildId: string | null; // should in theory never be null unless its a DM
	name: string;
	parentId: string | null;
	permissionOverrides: string[];
	position: number;
	slowmode: number;
	type: number;
}

export default Channels;
