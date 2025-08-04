import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import { LoaderIcon } from 'lucide-react'

const NoteDetailPage = () => {
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const navigate = useNavigate()

  const {id} = useParams()

  // console.log("Note ID =>", {id})

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`)
        setNote(res.data.data)
      } catch (error) {
        toast.error('Failed to fetch note. Please try again later.')
        console.error("Error fetching note:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchNote()
  }, [id])

  console.log("Note =>", {note})

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }


  return (
    <div>
      NoteDetailPage
    </div>
  )
}

export default NoteDetailPage

