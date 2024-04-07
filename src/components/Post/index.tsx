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
  const publishedAtDate = publishedAt ? new Date(publishedAt) : new Date()

  const publishedDateFormatted = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAtDate)

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

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea placeholder="what did you think of the project?" />

        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
