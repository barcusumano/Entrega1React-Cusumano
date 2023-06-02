import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="textBody">
        <ItemListContainer 
        greeting="Welcome!"
        subtitle="Come back soon for our full list of products" />
      </div>
    </>
  )
}

export default App
