import { useState } from 'react'
import Navbar from '../components/Navbar'

function HomePage() {
  const [isRateLimited, setIsRateLimited] = useState(false)
  return (
    <div className='min-h-screen'>
      <Navbar />
    </div>
  )
}

export default HomePage
