interface FriendsInteractions {
	flags: number;
	targetId: string;
	targetNickname: string;
	userId: string;
}

interface Friends {
	friendId: string;
	interactions: FriendsInteractions[];
	users: string[];
}

export default Friends;

export type { FriendsInteractions };
