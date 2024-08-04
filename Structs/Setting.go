package structs

import (
	"time"

	"github.com/scylladb/gocqlx/v2/table"
)

var SettingsTable = table.New(table.Metadata{
	Name:    "settings",
	Columns: []string{"user_id", "status", "custom_status", "bio", "tokens", "theme", "language", "privacy", "mentions", "max_guilds", "max_file_upload_size", "guild_order", "allowed_invites", "nav_location", "emoji_pack", "int_tbl_ver"},
	PartKey: []string{"user_id"},
	SortKey: []string{},
})

type Setting struct {
	UserID            string        `db:"user_id"`
	Status            int           `db:"status"`
	CustomStatus      *string       `db:"custom_status"`
	Bio               *string       `db:"bio"`
	Tokens            []Token       `db:"tokens"`
	Theme             string        `db:"theme"`
	Language          string        `db:"language"`
	Privacy           int           `db:"privacy"`
	Mentions          []Mention     `db:"mentions"`
	MaxGuilds         int           `db:"max_guilds"`
	MaxFileUploadSize int           `db:"max_file_upload_size"`
	GuildOrder        *[]GuildOrder `db:"guild_order"`
	AllowedInvites    int           `db:"allowed_invites"`
	NavLocation       string        `db:"nav_location"`
	EmojiPack         string        `db:"emoji_pack"`
}

type Token struct {
	Token     string    `cql:"token_"`
	CreatedAt time.Time `cql:"created_date"`
	IP        string    `cql:"ip"`
	Flags     int       `cql:"flags"`
	TokenID   string    `cql:"token_id"`
}

type Mention struct {
	MessageID string `cql:"message_id"`
	ChannelID string `cql:"channel_id"`
	Count     int    `cql:"count"`
}

type GuildOrder struct {
	GuildID  string `cql:"guild_id"`
	Position int    `cql:"position"`
}
