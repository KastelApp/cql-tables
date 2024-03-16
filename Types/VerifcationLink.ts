interface VerificationLink {
	code: string;
	createdDate: Date;
	expireDate: Date;
	flags: number;
	id: string;
	ip: string;
	userId: string;
}

export default VerificationLink;
