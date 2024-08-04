package structs

import (
	"time"

	"github.com/scylladb/gocqlx/v2/table"
)

var MessagesTable = table.New(table.Metadata{
	Name:    "messages",
	Columns: []string{"message_id", "author_id", "content", "allowed_mentions", "updated_date", "channel_id", "bucket", "flags", "mentions", "mention_roles", "mention_channels", "embeds", "attachments", "replying_to", "int_tbl_ver"},
	PartKey: []string{"channel_id", "bucket"},
	SortKey: []string{"message_id"},
})

type Author struct {
	Name    string `cql:"name"`
	IconURL string `cql:"iconurl"`
}

type Footer struct {
	Text      string    `cql:"text"`
	Timestamp time.Time `cql:"timestamp_"`
}

type Field struct {
	Title       string `cql:"title"`
	Description string `cql:"description"`
}

type MainObject struct {
	Title        string  `cql:"title"`
	Description  string  `cql:"description"`
	URL          string  `cql:"url"`
	Color        string  `cql:"color"`
	Author       Author  `cql:"author"`
	Footer       Footer  `cql:"footer"`
	Fields       []Field `cql:"fields"`
	ThumbnailURL string  `cql:"thumbnail_url"`
	ImageURL     string  `cql:"image_url"`
}

type Message struct {
	MessageID       int64        `db:"message_id"`
	AuthorID        string       `db:"author_id"`
	Content         string       `db:"content"`
	AllowedMentions int          `db:"allowed_mentions"`
	UpdatedDate     *time.Time   `db:"updated_date"`
	ChannelID       string       `db:"channel_id"`
	Bucket          string       `db:"bucket"`
	Flags           int          `db:"flags"`
	Mentions        []string     `db:"mentions"`
	MentionRoles    []string     `db:"mention_roles"`
	MentionChannels []string     `db:"mention_channels"`
	Embeds          []MainObject `db:"embeds"`
	Attachments     []string     `db:"attachments"`
	ReplyingTo      *string      `db:"replying_to"`
}
