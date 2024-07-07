package structs

import (
	"github.com/scylladb/gocqlx/v2/table"
)

var EmojisTable = table.New(table.Metadata{
	Name:    "emojis",
	Columns: []string{"emoji_id", "guild_id", "creator_id", "name", "disabled", "public"},
	PartKey: []string{"guild_id", "emoji_id"},
	SortKey: []string{},
})

type Emoji struct {
	EmojiID   string `db:"emoji_id"`
	GuildID   string `db:"guild_id"`
	CreatorID string `db:"creator_id"`
	Name      string `db:"name"`
	Disabled  bool   `db:"disabled"`
	Public    bool   `db:"public"`
}
