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
          <Post 
            author={'Ada'}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione odit magni placeat tempore reiciendis quia? Quasi totam magni doloribus tenetur quibusdam fuga praesentium, commodi iusto mollitia porro cupiditate dolores!'}
          />
          <Post 
            author={'Jordan'}
            description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ratione odit magni placeat tempore reiciendis quia? Quasi totam magni doloribus tenetur quibusdam fuga praesentium, commodi iusto mollitia porro cupiditate dolores!'}
          />
        </main>    
      </div>
    </div>
  )
}

export default App
