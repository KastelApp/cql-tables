interface Invites {
	ChannelId: string;
	Code: string;
	CreatedAt: Date;
	CreatorId: string;
	Deleteable: boolean;
	Expires: Date;
	GuildId: string;
	MaxUses: number;
	Uses: number;
}

export default Invites;
