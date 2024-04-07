import { Header } from './components/Header'

import styles from './App.module.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/reinheimermat.png',
      name: 'Matheus Reinheimer',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hello everyone 👋' },
      {
        type: 'paragraph',
        content:
          "I just uploaded another project in my portfolio. It's a project I did at the NLW Return, Rocketseat event. The project name is DoctorCare 🚀",
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: '2024-05-10 20:13:30',
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Hello everyone 👋' },
      {
        type: 'paragraph',
        content:
          "I just uploaded another project in my portfolio. It's a project I did at the NLW Return, Rocketseat event. The project name is DoctorCare 🚀",
      },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: '2024-05-10 20:13:30',
  },
]

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
