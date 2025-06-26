import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import RateLimitedUI from '../components/RateLimitedUI'
import axios from 'axios'
import  toast  from 'react-hot-toast'

function HomePage() {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // const res = await fetch('http://localhost:5000/api/notes')
        // const data = await res.json()
        const res = await axios.get('http://localhost:5000/api/notes')
        console.log("Date =>", res.data)
        setNotes(res.data)
        setIsRateLimited(false)
      } catch (error) {
        console.log('Failed to fetch notes:', error)
        // console.error('Failed to fetch notes:', error)
        if(error.response && error.response.status === 429) {
          // If the error is a rate limit error, set the rate limit state
          setIsRateLimited(true)
        }else{
          toast.error('Failed to fetch notes. Please try again later.')
        }

      }
    }
    fetchNotes()
  }, [])

  // 2:

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
    </div>
  )
}

export default HomePage
