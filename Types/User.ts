interface Users {
	avatar: string | null;
	email: string;
	flags: string;
	globalNickname: string | null;
	guilds: string[];
	ips: string[];
	password: string | null;
	phoneNumber: string | null;
	publicFlags: string;
	tag: string;
	twoFaSecret: string | null;
	userId: string;
	username: string;
}

export default Users;
