interface SettingsTokens {
	createdDate: Date;
	flags: number;
	ip: string;
	token: string;
	tokenId: string;
}

interface SettingsMentions {
	messageId: string;
}

interface GuildOrder {
	guildId: string;
	position: number
}

interface Settings {
	allowedInvites: number,
	bio: string | null;
	customStatus: string | null;
	guildOrder: GuildOrder[] | null,
	language: string;
	maxFileUploadSize: number;
	maxGuilds: number;
	mentions: SettingsMentions[];
	privacy: number;
	status: number;
	theme: string;
	tokens: SettingsTokens[];
	userId: string;
}

export default Settings;

export type { SettingsTokens, SettingsMentions, GuildOrder };
