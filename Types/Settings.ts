interface SettingsTokens {
	createdDate: Date;
	flags: number;
	ip: string;
	token: string;
	tokenId: string;
}

interface SettingsMentions {
	channelId: string;
	count: number;
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
	emojiPack: "fluentui-emoji" | "native" | "noto-emoji" | "twemoji";
	guildOrder: GuildOrder[] | null,
	language: string;
	maxFileUploadSize: number;
	maxGuilds: number;
	mentions: SettingsMentions[];
	navLocation: "bottom" | "left";
	privacy: number;
	status: number;
	theme: string;
	tokens: SettingsTokens[];
	userId: string;
}

export default Settings;

export type { SettingsTokens, SettingsMentions, GuildOrder };
