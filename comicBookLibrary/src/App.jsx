import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './index.css'
import BrowseCharacters from './BrowseCharacters'
import Home from './Home'
import Comics from './Comics'
import NavigationBar from './NavigationBar'
import CharacterDetails from './CharacterDetails'
import NotFound from './NotFound'
function App() {

  return (
    <div className="app-container">
      <NavigationBar />
      <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/browse-characters/' element={<BrowseCharacters />} />
        <Route path='/character-details/:id' element={<CharacterDetails />}/>
        <Route path='/comics/' element={<Comics/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
