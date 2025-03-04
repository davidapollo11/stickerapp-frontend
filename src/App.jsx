import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'

import Home from './pages/HomePage'
import EditorPage from './pages/EditorPage'
import GalleryPage from './pages/GalleryPage'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit' element={<EditorPage />} />
        <Route path='/galery' element={<GalleryPage />} />
      </Routes>
  )
}

export default App
