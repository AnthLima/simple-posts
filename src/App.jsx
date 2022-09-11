import { useState } from 'react'
import styles from './App.module.css';
import { Header } from './components/Header/Header'  
import {Post} from './components/Post/Post'
import { Sidebar } from './components/SideBar/Sidebar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>    
        <main>
          <Post author="Evan Jones" description="Web Developer" />
          <Post author="Evan Jones" description="Web Developer" />
        </main>    
      </div>
    </div>
  )
}

export default App
