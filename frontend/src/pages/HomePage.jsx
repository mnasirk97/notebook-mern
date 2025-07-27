import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import axios from 'axios'
import  toast  from 'react-hot-toast'
import NoteCard from '../components/NoteCard'
import api from '../lib/axios'

function HomePage() {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  const fetchNotes = async () => {
    setLoading(true)
    try {
      // const res = await axios.get('http://localhost:5000/api/notes') // => Using axios directly
      const res = await api.get('/notes')  // => Using the axios instance with baseURL
      console.log("Data =>", res.data)
      setNotes(res.data.data)
      setIsRateLimited(false)
    } catch (error) {
      console.log('Failed to fetch notes:', error)
      if (error.response?.status === 429) {
        setIsRateLimited(true)
      } else {
        toast.error('Failed to fetch notes. Please try again later.')
      }
    } finally {
      setLoading(false)
    }
  }
  fetchNotes()
}, [])



  // useEffect(() => {
  //   const fetchNotes = async () => {
  //     try {
  //       // const res = await fetch('http://localhost:5000/api/notes')
  //       // const data = await res.json()
  //       const res = await axios.get('http://localhost:5000/api/notes')
  //       console.log("Date =>", res.data)
  //       setNotes(res.data)
  //       setIsRateLimited(false)
  //     } catch (error) {
  //       console.log('Failed to fetch notes:', error)
  //       // if(error.response && error.response.status === 429) {
  //       if(error.response?.status == 429) {
  //         // If the error is a rate limit error, set the rate limit state
  //         setIsRateLimited(true)
  //       }else{
  //         toast.error('Failed to fetch notes. Please try again later.')
  //       }
  //     }finally{
  //         // setIsRateLimited(false)
  //         setLoading(false)
  //       }
  //   }
  //   fetchNotes()
  // }, [])

  

  // ===> Testing
  // useEffect(() => {
  //   const fetchNotes = async () => {
  //     try {
  //       const response = await fetch('/api/notes')
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok')
  //       }
  //       const data = await response.json()
  //       setNotes(data)
  //     } catch (error) {
  //       console.error('Failed to fetch notes:', error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchNotes()

  //   // Simulate rate limit for demonstration purposes
  //   const rateLimitTimeout = setTimeout(() => {
  //     setIsRateLimited(false)
  //   }, 5000) // 5 seconds

  //   return () => clearTimeout(rateLimitTimeout)
  // }, [])

  return (
    <div className='min-h-screen'>
      <Navbar />

      {isRateLimited && <RateLimitedUI />}
      {console.log("notes in return", notes)}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

            {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            //  <div key={note.id}>
            //       {note.title} | {note.content}
            //   </div>
            ))}
          </div>
        )}
      </div>


      {/* For debugging */}
      {/* <div className="max-w-7xl mx-auto p-4 mt-6">
  {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

  {!loading && notes.length === 0 && !isRateLimited && (
    <div className="text-center text-red-500">No notes found or data is empty.</div>
  )}

  {notes.length > 0 && !isRateLimited && (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <div key={note.id} className="p-4 border rounded shadow">
          {note.title} | {note.content}
        </div>
      ))}
    </div>
  )}
      </div> */}

    </div>
  )
}

export default HomePage


