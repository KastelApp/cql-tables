import type { types } from "@kastelapp/cassandra-driver";

interface bigintPair {
	first: types.Long | string;
	second: types.Long | string;
}

interface PermissionsOverrides {
	allow: bigintPair[];
	deny: bigintPair[];
	editable: boolean;
	id: string;// ? Id of the user or role
	permissionId: string;
	slowmode: number;
	type: number;
}

export default PermissionsOverrides;

export type { bigintPair };
