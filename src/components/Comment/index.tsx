import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './index.module.css'
import { Avatar } from '../Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string
  onDeleteComment: (comments: string[]) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment([content])
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

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

            <button onClick={handleDeleteComment} title="Remove comment">
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Likes <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
