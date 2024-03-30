package structs

import (
	"time"

	"github.com/scylladb/gocqlx/v2"
	"github.com/scylladb/gocqlx/v2/table"
)

var MessagesTable = table.New(table.Metadata{
	Name:    "messages",
	Columns: []string{"message_id", "author_id", "content", "allowed_mentions", "updated_date", "channel_id", "bucket", "flags", "mentions", "mention_roles", "mention_channels", "embeds", "attachments", "replying_to"},
	PartKey: []string{"channel_id", "bucket"},
	SortKey: []string{"message_id"},
})

type Author struct {
	gocqlx.UDT
	Name    string `db:"name"`
	IconURL string `db:"iconurl"`
}

type Footer struct {
	gocqlx.UDT
	Text      string    `db:"text"`
	Timestamp time.Time `db:"timestamp_"`
}

type Field struct {
	gocqlx.UDT
	Title       string `db:"title"`
	Description string `db:"description"`
}

type MainObject struct {
	gocqlx.UDT
	Title       string `db:"title"`
	Description string `db:"description"`
	URL         string `db:"url"`
	Color       string `db:"color"`
	Author
	Footer
	Fields       []Field `db:"fields"`
	ThumbnailURL string  `db:"thumbnail_url"`
	ImageURL     string  `db:"image_url"`
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
