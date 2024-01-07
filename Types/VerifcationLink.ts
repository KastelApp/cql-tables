interface VerificationLink {
	code: string;
	createdDate: Date;
	expireDate: Date;
	flags: number;
	ip: string;
	userId: string;
}

export default VerificationLink;
