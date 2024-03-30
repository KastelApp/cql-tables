package structs

import (
	"time"

	"github.com/scylladb/gocqlx/v2"
	"github.com/scylladb/gocqlx/v2/table"
)

var GuildMembersTable = table.New(table.Metadata{
	Name:    "guild_members",
	Columns: []string{"guild_id", "user_id", "roles", "nickname", "joined_at", "flags", "timeouts", "channel_acks", "guild_member_id", "left"},
	PartKey: []string{"guild_id", "left"},
	SortKey: []string{"guild_member_id"},
})

type GuildMember struct {
	GuildID       string          `db:"guild_id"`
	UserID        string          `db:"user_id"`
	Roles         []string        `db:"roles"`
	Nickname      *string         `db:"nickname"`
	JoinedAt      time.Time       `db:"joined_at"`
	Flags         int             `db:"flags"`
	Timeouts      []MemberTimeout `db:"timeouts"`
	ChannelAcks   []ChannelAck    `db:"channel_acks"`
	GuildMemberID int64           `db:"guild_member_id"`
	Left          bool            `db:"left"`
}

type MemberTimeout struct {
	gocqlx.UDT
	ChannelID    string    `db:"channel_id"`
	TimeoutUntil time.Time `db:"timeout_until"`
}

type ChannelAck struct {
	gocqlx.UDT
	ChannelID string `db:"channel_id"`
	MessageID string `db:"message_id"`
}
