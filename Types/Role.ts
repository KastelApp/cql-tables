import type { bigintPair } from "./PermissionsOverides.ts";

interface Roles {
	allowedAgeRestricted: boolean;
	color: number;
	deleteable: boolean;
	guildId: string;
	hoisted: boolean;
	mentionable: boolean;
	name: string;
	permissions: bigintPair[];
	position: number;
	roleId: string;
}

export default Roles;
