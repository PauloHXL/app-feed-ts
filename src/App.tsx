import { Header } from './components/Header'
import { Post, PostProps } from './components/Post'

import style from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar'

interface Posts extends PostProps {
  id: number;
}

const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/PauloHXL.png",
      name: "Paulo Henrique",
      role: "Web Developer"
    }, 
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date("2022-11-15 12:00:00"),
  },
  {
    id: 2,
    author: {
      avatarURL: "https://github.com/PauloHXL.png",
      name: "Mariana Andrade",
      role: "Analista implatação"
    }, 
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"}
    ],
    publishedAt: new Date("2022-11-10 12:00:00"),
  }
]


export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
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

