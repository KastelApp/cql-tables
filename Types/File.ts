interface Files {
	deleted: boolean;
	fileId: string;
	// ! not always present
	forId: string | null;
	// ! not always present
	hash: string | null;
	name: string;
	type: string;
	uploaded: boolean;
	uploadedAt: Date;
	uploadedBy: string;
}

export default Files;

export type { Files };
