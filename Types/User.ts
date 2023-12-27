interface Users {
	Avatar: string | null;
	Email: string;
	Flags: string;
	GlobalNickname: string | null;
	Guilds: string[];
	Ips: string[];
	Password: string;
	PhoneNumber: string;
	PublicFlags: string;
	Tag: string;
	TwoFaSecret: string;
	UserId: string;
	Username: string;
}

export default Users;
