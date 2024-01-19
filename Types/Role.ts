import type { types } from "@kastelll/cassandra-driver";

interface Roles {
	allowedNsfw: boolean;
	color: number;
	deleteable: boolean;
	guildId: string;
	hoisted: boolean;
	mentionable: boolean;
	name: string;
	permissions: types.Long;
	position: number;
	roleId: string;
}

export default Roles;
