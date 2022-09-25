import { useState } from 'react'
import styles from './App.module.css';
import { Header } from './components/Header/Header'  
import {Post} from './components/Post/Post'
import { Sidebar } from './components/SideBar/Sidebar';
function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://github.com/AnthLima.png",
        name: "Anthony Lima",
        role: "Full stack Developer"
      },
      content: [
        {type: 'paragraph' , content: 'Hey guys 👋'},

        {type: 'paragraph', content:"I just uploaded another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. The name of the project is DoctorCare 🚀"},

        {type: 'link', content: '👉 jane.design/doctorcare'},

      ],
      publishedAt: new Date('2022-09-24 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/maykbrito.png",
        name: "Mayk Brito",
        role: "Educator @RocketSeat"
      },
      content: [
        {type: 'paragraph' , content: 'Hey guys 👋'},

        {type: 'paragraph', content:"I am an amazing programming teacher who overcame many obstacles for having adhd and managed to reach the level I am today.🚀"},

        {type: 'link', content: '👉 Instagram/@maykbrito'},

      ],
      publishedAt: new Date('2022-05-03 20:00:00')
    }
  ];
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>    
        <main>
          {posts.map(post => {
            return (
              <Post 
                id={post.id}
                key={post.id}
                author= {post.author}
                content= {post.content}
                publishedAt= {post.publishedAt}
              />
            )
          })}
        </main>    
      </div>
    </div>
  )
}

export default App
