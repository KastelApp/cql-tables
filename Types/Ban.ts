interface Bans {
	bannedDate: Date;
	bannerId: string;
	guildId: string;
	reason: string | null;
	unbanDate: Date;
	userId: string;
}

export default Bans;
