import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
      name: "Marcus Vinicius",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      { type: "link", content: "google.com" },
    ],
    publishedAt: new Date("2020-01-02 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://pbs.twimg.com/media/ByTcwxAIUAESdve.jpg",
      name: "Mikaela Aleixo",
      role: "Designer",
    },
    content: [
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        type: "paragraph",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      },
      { type: "link", content: "google.com" },
    ],
    publishedAt: new Date("2020-01-12 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
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
  );
}
