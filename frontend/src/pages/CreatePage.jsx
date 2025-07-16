import { useState } from "react"

function CreatePage() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  return (
    <div>
      CreatePage
   
    </div>
  )
}

export default CreatePage
