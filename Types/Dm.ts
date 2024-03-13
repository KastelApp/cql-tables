interface DmRecipients {
	flags: number;
	userId: string;
}

interface Dm {
	channelId: string;
	flags: number;
	recipients: DmRecipients[];
}

export default Dm;

export type { DmRecipients };
