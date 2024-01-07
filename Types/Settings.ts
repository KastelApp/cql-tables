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

interface Settings {
	bio: string | null;
	language: string;
	maxFileUploadSize: number;
	maxGuilds: number;
	mentions: SettingsMentions[];
	presence: number;
	privacy: number;
	status: string;
	theme: string;
	tokens: SettingsTokens[];
	userId: string;
}

export default Settings;

export type { SettingsTokens, SettingsMentions };
