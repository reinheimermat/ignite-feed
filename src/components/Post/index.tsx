import { useState } from 'react'
import { Avatar } from '../Avatar'
import { Comment } from '../Comment'
import styles from './index.module.css'

interface PostProps {
  author: {
    avatarUrl: string
    name: string
    role: string
  }
  publishedAt: string | undefined
  content:
    | {
        type: string
        content: string
      }[]
    | undefined
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState(['Post n1'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedAtDate = publishedAt ? new Date(publishedAt) : new Date()

  const publishedDateFormatted = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAtDate)

  function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    event.target.setCustomValidity('The comment cannot be empty')
    alert('The comment cannot be empty')
  }

  function deleteComment(commentsToDelete: string[]) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => !commentsToDelete.includes(comment),
    )

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title="06 Apr at 08:13h" dateTime="2024-05-11 08:13:30">
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        {content?.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>
          } else if (line.type === 'link') {
            return (
              <a key={index} href="#">
                {line.content}
              </a>
            )
          }
          return null
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea
          placeholder="what did you think of the project?"
          name="comment"
          onChange={handleNewCommentChange}
          value={newCommentText}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comment
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              content={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
