import React from 'react'
import { Route, Routes } from 'react-router'
import { toast } from 'react-hot-toast'

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
function App() {
  return (
    <div data-theme="forest">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/note/:id" element={<NoteDetailPage />} />
    </Routes>

    {/* 2:03 */}

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
    </div>
  )
}

export default App
