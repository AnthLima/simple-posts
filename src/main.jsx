import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import { Header } from './components/Header'  
import './global.css';
import {Post} from './Post'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    {/* <App /> */}
    {/* <Post 
      author={'Anthony'} 
      description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo maiores amet unde placeat cupiditate earum eos, harum nemo veritatis nulla. Adipisci impedit rem molestias provident maiores non! Perspiciatis, commodi dicta.'}
    />
    <Post 
      author={'Diego'} 
      description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo maiores amet unde placeat cupiditate earum eos, harum nemo veritatis nulla. Adipisci impedit rem molestias provident maiores non! Perspiciatis, commodi dicta.'}
    /> */}

  </React.StrictMode>
)
