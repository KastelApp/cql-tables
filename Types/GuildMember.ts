import type { types } from "@kastelapp/cassandra-driver";

interface GuildMembersTimeouts {
	channelId: string;
	timeoutUntil: Date;
}

interface GuildMembers {
	flags: number;
	guildId: string;
	guildMemberId: types.Long | string;
	joinedAt: Date;
	nickname: string | null;
	roles: string[];
	timeouts: GuildMembersTimeouts[];
	userId: string;
}

export default GuildMembers;

export type { GuildMembers, GuildMembersTimeouts };
