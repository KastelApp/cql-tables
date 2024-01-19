interface PlatformInvite {
    code: string;
    creatorId: string;
    expiresAt: Date;
    usedAt: Date | null;
    usedById: string | null;
}

export default PlatformInvite;
