package structs

import (
	"github.com/scylladb/gocqlx/v2/table"
)

var BansTable = table.New(table.Metadata{
	Name:    "bans",
	Columns: []string{"guild_id", "user_id", "banner_id", "reason", "banned_date", "unban_date"},
	PartKey: []string{"guild_id", "user_id"},
	SortKey: []string{},
})

type Ban struct {
	GuildID    string  `db:"guild_id"`
	UserID     string  `db:"user_id"`
	BannerID   string  `db:"banner_id"`
	Reason     *string `db:"reason"`
	BannedDate int64   `db:"banned_date"`
	UnbanDate  int64   `db:"unban_date"`
}
