interface Friends {
	createdAt: Date,
	friendId: string;
	primaryUserFlags: number;
	primaryUserId: string;
	primaryUserNickname: string | null;
	// ? The primary user sets this
	secondaryUserFlags: number;
	// ? The secondary user sets this
	secondaryUserId: string;
	secondaryUserNickname: string | null;
}

export default Friends;
