import type { types } from "@kastelll/cassandra-driver";

interface PermissionsOverrides {
	allow: types.Long;
	deny: types.Long;
	editable: boolean;
	id: string;// ? Id of the user or role
	permissionId: string;
	slowmode: number;
	type: number;
}

export default PermissionsOverrides;
