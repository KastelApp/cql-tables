interface DmRecipients {
	flags: number;
	userId: string;
}

interface Dm {
	channelId: string;
	dmId: string;
	flags: number;
	recipients: DmRecipients[];
}

export default Dm;

export type { DmRecipients };
