import React from 'react'
import Home from './pages/Home'
import AddVocabulary from './pages/AddVocabulary'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import AddTip from './pages/AddTip'
import AddTheory from './pages/AddTheory'
import Vocabulary from './pages/Vocabulary'
import Tip from './pages/Tip'
import Theory from './pages/Theory'

const App = () => {
  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/vocabulary' element={<Vocabulary/>} />
        <Route path='/vocabulary/add' element={<AddVocabulary/>} />
        <Route path='/tip' element={<Tip/>} />
        <Route path='/tip/add' element={<AddTip/>} />
        <Route path='/theory' element={<Theory/>} />
        <Route path='/theory/add' element={<AddTheory/>} />
      </Routes>
    </div>
  )
}

export default App
