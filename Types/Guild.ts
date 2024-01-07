interface Guilds {
	coOwners: string[];
	description: string | null;
	features: string[];
	flags: number;
	guildId: string;
	icon: string | null;
	maxMembers: number;
	name: string;
	ownerId: string;
}

export default Guilds;
