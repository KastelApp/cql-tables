import type { types } from "@kastelll/cassandra-driver";

interface Roles {
	allowedMentions: number;
	allowedNsfw: boolean;
	color: number;
	deleteable: boolean;
	guildId: string;
	hoisted: boolean;
	name: string;
	permissions: types.Long;
	position: number;
	roleId: string;
}

export default Roles;
