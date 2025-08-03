import React, { useState } from 'react'

const NoteDetailPage = () => {
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  return (
    <div>
      NoteDetailPage
    </div>
  )
}

export default NoteDetailPage

