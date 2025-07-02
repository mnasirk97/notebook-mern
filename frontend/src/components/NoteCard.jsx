import React from 'react'
import { Link } from 'react-router'

function NoteCard({ note }) {
  return (
    <Link to={`/note/${note._id}`} className="note-card">
      {note.title}
    </Link>
  )
}

export default NoteCard


// 