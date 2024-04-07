import { Comment } from '../Comment'
import styles from './index.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            src="https:github.com/reinheimermat.png"
            alt="Imagem de perfil"
          />
          <div className={styles.authorInfo}>
            <strong>Matheus Reinheimer</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="06 Apr at 08:13h" dateTime="2024-05-11 08:13:30">
          Published 1 hour ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hello everyone 👋</p>

        <p>
          I just uploaded another project in my portfolio. It&apos;s a project I
          did at the NLW Return, Rocketseat event. The project name is
          DoctorCare 🚀
        </p>

        <p>
          👉 <a href="#">jane.design/doctorcare</a>
        </p>

        <p>
          <a href="#">#newproject</a> <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
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
