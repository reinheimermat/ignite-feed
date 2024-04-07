import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './index.module.css'
import { Avatar } from '../Avatar'

interface CommentProps {
  content: string
}

export function Comment({ content }: CommentProps) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/reinheimermat.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Reinheimer</strong>
              <time title="07 Apr at 13:02h" dateTime="2023-04-07 13:02:30">
                3 hours ago
              </time>
            </div>

            <button title="Remove comment">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Likes <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
