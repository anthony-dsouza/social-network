// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.17.2
// source: postQuery.sql

package crud

import (
	"context"
	"database/sql"
	"time"
)

const createPost = `-- name: CreatePost :one
INSERT INTO post (
  author, message_, image_, created_at, privacy
) VALUES (
  ?, ?, ?, ?, ?
)
RETURNING id, author, message_, image_, created_at, privacy
`

type CreatePostParams struct {
	Author    int64
	Message   sql.NullString
	Image     sql.NullString
	CreatedAt time.Time
	Privacy   int64
}

func (q *Queries) CreatePost(ctx context.Context, arg CreatePostParams) (Post, error) {
	row := q.db.QueryRowContext(ctx, createPost,
		arg.Author,
		arg.Message,
		arg.Image,
		arg.CreatedAt,
		arg.Privacy,
	)
	var i Post
	err := row.Scan(
		&i.ID,
		&i.Author,
		&i.Message,
		&i.Image,
		&i.CreatedAt,
		&i.Privacy,
	)
	return i, err
}

const deletePost = `-- name: DeletePost :exec
DELETE FROM post
WHERE author = ? AND id = ?
`

type DeletePostParams struct {
	Author int64
	ID     int64
}

func (q *Queries) DeletePost(ctx context.Context, arg DeletePostParams) error {
	_, err := q.db.ExecContext(ctx, deletePost, arg.Author, arg.ID)
	return err
}

const getPosts = `-- name: GetPosts :many
SELECT id, author, message_, image_, created_at, privacy FROM post
WHERE author = ?
`

func (q *Queries) GetPosts(ctx context.Context, author int64) ([]Post, error) {
	rows, err := q.db.QueryContext(ctx, getPosts, author)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Post
	for rows.Next() {
		var i Post
		if err := rows.Scan(
			&i.ID,
			&i.Author,
			&i.Message,
			&i.Image,
			&i.CreatedAt,
			&i.Privacy,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}
