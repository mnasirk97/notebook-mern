import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { toast } from 'react-hot-toast'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
function App() {
  return (
    <div className="relative h-full w-full">
       <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />
    </Routes>
    </div>
  )
}

export default App


  {/* Example of tailwind */}
        {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}




      {/* Example of react-hot-toast */}
      {/* <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <div>
            <span>Success</span>
          </div>
        </div> */}

 {/* Example of Toast */}
      {/* <button onClick={()=> toast.success("Congrates")}>click me</button>
      <button onClick={()=> toast.error("Something went wrong")}>click me</button> */}