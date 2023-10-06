interface Report {
    AssignedTo: string; // The staff member assigned to the report 
    CreatedAt: Date;
    Flags: number;
    ReportId: string;  // The id of the report
    ReportedId: string; // The id of the thing that was reported (user, guild, message, etc)
    Reporter: string;
    Status: number;
    Type: number; // 0 = user, 1 = guild, 2 = message, 3 = other
    UpdatedAt: Date;
}

export default Report;
