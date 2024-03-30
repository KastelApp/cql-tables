package structs

import (
	"github.com/scylladb/gocqlx/v2/table"
)

var ChannelsTable = table.New(table.Metadata{
	Name:    "channels",
	Columns: []string{"channel_id", "guild_id", "name", "description", "type", "age_restricted", "allowed_mentions", "parent_id", "children", "position", "permission_overrides", "slowmode"},
	PartKey: []string{"guild_id", "channel_id"},
	SortKey: []string{},
})

type Channel struct {
	ChannelID           string   `db:"channel_id"`
	GuildID             *string  `db:"guild_id"`
	Name                string   `db:"name"`
	Description         *string  `db:"description"`
	Type                int      `db:"type"`
	AgeRestricted       bool     `db:"age_restricted"`
	AllowedMentions     int      `db:"allowed_mentions"`
	ParentID            *string  `db:"parent_id"`
	Children            []string `db:"children"`
	Position            int      `db:"position"`
	PermissionOverrides []string `db:"permission_overrides"`
	Slowmode            int      `db:"slowmode"`
}
