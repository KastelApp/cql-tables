import type { types } from "@kastelapp/cassandra-driver";

interface GuildMembersTimeouts {
	channelId: string;
	timeoutUntil: Date;
}

interface ChannelAcks {
	channelId: string;
	messageId: string;
}

interface GuildMembers {
	channelAcks: ChannelAcks[];
	flags: number;
	guildId: string;
	guildMemberId: types.Long | string;
	joinedAt: Date;
	left: boolean;
	nickname: string | null;
	roles: string[];
	timeouts: GuildMembersTimeouts[];
	userId: string;
}

export default GuildMembers;

export type { GuildMembers, GuildMembersTimeouts, ChannelAcks };
