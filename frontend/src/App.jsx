import React from 'react'
import { Route, Routes } from 'react-router'
import { toast } from 'react-hot-toast'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
function App() {
  return (
    <div data-theme="forest">
        <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <button onClick={()=> toast.success("Congrates")}>click me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
      <button onClick={()=> toast.error("Something went wrong")}>click me</button>
    </div>
  )
}

export default App
