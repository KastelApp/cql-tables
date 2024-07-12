package structs

import (
	"time"

	"github.com/scylladb/gocqlx/v2/table"
)

var FilesTable = table.New(table.Metadata{
	Name:    "files",
	Columns: []string{"file_id", "for_id", "name", "type", "deleted", "uploaded", "uploaded_at", "uploaded_by", "hash", "int_tbl_ver"},
	PartKey: []string{"file_id"},
	SortKey: []string{},
})

type File struct {
	FileID     string    `db:"file_id"`
	ForID      *string   `db:"for_id"`
	Name       string    `db:"name"`
	Type       string    `db:"type"`
	Deleted    bool      `db:"deleted"`
	Uploaded   bool      `db:"uploaded"`
	UploadedAt time.Time `db:"uploaded_at"`
	UploadedBy string    `db:"uploaded_by"`
	Hash       *string   `db:"hash"`
	IntTblVer  int       `db:"int_tbl_ver"`
}
