interface Report {
    Type: number; // 0 = user, 1 = guild, 2 = message, 3 = other
    Reporter: string;
    Flags: number;
    ReportedId: string; // The id of the thing that was reported (user, guild, message, etc)
    ReportId: string; // The id of the report
    AssignedTo: string; // The staff member assigned to the report
    Status: number;
    CreatedAt: Date;
    UpdatedAt: Date;
}

export default Report;