interface Files {
	Deleted: boolean;
	FileId: string;
	Name: string;
	Type: string;
	Uploaded: boolean;
	UploadedAt: Date;
	UploadedBy: string;
}

export default Files;

export type { Files };
