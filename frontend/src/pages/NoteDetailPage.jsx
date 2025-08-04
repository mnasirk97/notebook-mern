import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import api from '../lib/axios'
import toast from 'react-hot-toast'
import { ArrowLeftIcon, LoaderIcon, TrashIcon } from 'lucide-react'

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

  // console.log("Note =>", {note})
  const handleDelete = async () => {}

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }


  return (
    <div className='min-h-screen bg-base-200'>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
        <div className='flex items-center justify-between mb-6'>
          <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
          </Link>
          <button onClick={handleDelete} className="btn btn-error btn-outline">
            <TrashIcon className="h-5 w-5" />
            Delete Note
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default NoteDetailPage

