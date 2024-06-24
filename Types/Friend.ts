interface Friends {
	createdAt: Date,
	flags: number;
	friendId: string;
	primaryUserId: string;
	primaryUserNickname: string; // ? The secondary user sets this
	secondaryUserId: string;
	secondaryUserNickname: string; // ? The primary user sets this
}

export default Friends;
