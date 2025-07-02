import React from 'react'
import { Link } from 'react-router'

function NoteCard({ note }) {
  return (
    <Link to={`/note/${note._id}`} className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#00FF9D]">
      
    </Link>
  )
}

export default NoteCard


// 