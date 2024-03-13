interface Invites {
	channelId: string;
	code: string;
	createdAt: Date;
	creatorId: string;
	deleteable: boolean;
	expires: Date | null;
	guildId: string;
	maxUses: number;
	type: number;
	uses: number;
}

export default Invites;
