import type { guildFeatures } from "@/Constants.ts";

type getFeatures = typeof guildFeatures[number]["name"]
interface Guilds {
	coOwners: string[];
	description: string | null;
	features: getFeatures[];
	flags: number;
	guildId: string;
	icon: string | null;
	maxMembers: number;
	name: string;
	ownerId: string;
}

export default Guilds;
