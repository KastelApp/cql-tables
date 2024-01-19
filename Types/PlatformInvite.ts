interface PlatformInvite {
    code: string;
    creatorId: string;
    expiresAt: Date;
    usedById: string;
}

export default PlatformInvite;
