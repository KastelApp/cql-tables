interface Files {
	Deleted: boolean;
	FileId: string;
	Hash: string | null; // not always present
	Name: string;
	Type: string;
	Uploaded: boolean;
	UploadedAt: Date;
	UploadedBy: string;
}

export default Files;

export type { Files };
