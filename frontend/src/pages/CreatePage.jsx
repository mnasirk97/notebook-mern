import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";


function CreatePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    console.log("Event:", event);
    event.preventDefault();

   if (!title.trim() || !content.trim()) {
      toast.error("Title and content are required.");
      return;
    }
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/notes", {
        title,
        content,
      });
      toast.success("Note created successfully!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note:", error);
      // toast.error("Failed to create note.");
      if(error.response.status === 429) {
        toast.error("Slow down! You are creating notes too quickly. Please wait a moment before trying again.", {
          duration: 5000,
          icon: "🚨",
        });
      }else{
        toast.error("Failed to create note. Please try again later.", {
          duration: 5000,
          icon: "⚠️",
        });
      }
      // if(error.response.status === 429) {
      //   // toast.error("Too many requests. Please try again later.");
      //   toast.error("Slow down! You are creating notes too quickly. Please wait a moment before trying again.", {
      //     duration: 5000,
      //     position: "top-center",
      //     style: {
      //       background: "#f87171", // Tailwind red-400
      //       color: "#fff",
      //     },
      //   });
      // }
    }finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
          <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>
          <div className="card bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Create a New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter note title"
                    className="input input-bordered"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />  
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    placeholder="Enter your note here.."
                    className="textarea textarea-bordered h-32"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={loading}
                    onClick={() => {
                      // setLoading(true);
                      handleSubmit();
                    }}
                  >
                    {loading ? "Creating..." : "Create Note"}
                  </button> 
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePage;


