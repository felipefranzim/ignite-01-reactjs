import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/felipefranzim.png',
      name: 'Felipe Franzim',
      role: 'Tech Lead'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Esse aqui é só um teste básico de React JS mesmo 🚀' },
      { type: 'link', content: 'https://github.com/felipefranzim' },
    ],
    publishedAt: new Date('2025-04-29 21:09:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/felipefranzim.png',
      name: 'Felipe Franzim',
      role: 'Tech Lead'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Esse aqui é só um teste básico de React JS mesmo 🚀' },
      { type: 'link', content: 'https://github.com/felipefranzim' },
    ],
    publishedAt: new Date('2025-04-29 21:09:00')
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
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
          }
          )}
        </main>
      </div>
    </div>
  )
}

export default App
