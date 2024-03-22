package structs

import (
	"time"

	"github.com/scylladb/gocqlx/v2/table"
)

var InvitesTable = table.New(table.Metadata{
	Name:    "invites",
	Columns: []string{"code", "guild_id", "channel_id", "expires", "created_at", "uses", "max_uses", "creator_id", "deleteable", "type"},
	PartKey: []string{"guild_id", "code"},
	SortKey: []string{},
})

type Invite struct {
	Code       string    `db:"code"`
	GuildID    string    `db:"guild_id"`
	ChannelID  string    `db:"channel_id"`
	Expires    time.Time `db:"expires"`
	CreatedAt  time.Time `db:"created_at"`
	Uses       int       `db:"uses"`
	MaxUses    int       `db:"max_uses"`
	CreatorID  string    `db:"creator_id"`
	Deleteable bool      `db:"deleteable"`
	Type       int       `db:"type"`
}