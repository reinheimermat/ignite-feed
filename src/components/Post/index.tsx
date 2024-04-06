interface PostProps {
  author: string
  content: string
}

export function Post({ author, content }: PostProps) {
  return (
    <article>
      <strong>{author}</strong>
      <p>{content}</p>
    </article>
  )
}
