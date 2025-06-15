import Note from "../models/Note.js";


export async function getAllPosts(req, res){
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
        // console.log("notes => ", notes)
        // res.status(200).json(notes);
        res.status(200).json({
            message: "Get All Post",
            data: notes
        });
    } catch (error) {
        console.error("errrror in getAllPost controler", error)
        res.status(500).json({message: "Internal sever errror"})
    }
}


export async function getPostById(req, res){
 try {
       const noteId = req.params.id;
       const note = await Note.findById(noteId);
       if(!note){
        return res.status(404).json({ message: "Note not found with given ID" })
       }
       res.status(200).json({ 
        message: `You got note with id ${noteId}`,
        data: note
        })
 } catch (error) {
    console.error("errrror in getAllPost controler", error)
    res.status(500).json({message: "Internal sever errror"})
 };
}

export async function createPost(req, res){
    try {
        const {title, content} = req.body;
        if(!title, !content){
            return res.status().json({ message: "All fields are required"})
        }
        const note = new Note({
            title: title,
            content: content
        }) 
        const data = await note.save()
        console.log("Notes Created =>", note)
        res.status(201).json(data)
        // res.status(201).json({
        //     message: "Note created Successfully"
        // })
    } catch (error) {
        console.error("Error in createPost", error)
        res.status(500).json({
            message: "Internal server error"
        })
    }   
}

export async function updatePost(req, res){
   try {
     const noteId = req.params.id;
     const {title, content} = req.body;
     const data = await Note.findByIdAndUpdate(noteId, {
        title: title,
        content: content
     },
    {
        new: true, // Return the updated document
        // runValidators: true // Validate the update against the schema
    })
     if(!data){
        return res.status(404).json({
            message: "Data note found with given ID"
        })
     }
     console.log("Notes Updated Successfully")
     res.status(200).json({ 
        message: `You updated note with id ${noteId}` ,
        data: data
    });
   } catch (error) {
    console.error("Error in updatePost", error)
    res.status(500).json({
    message: "Internal server error"
    })
   }

}

export async function deletePost(req, res){
   try {
     const noteId = req.params.id;
     const note = await Note.findByIdAndDelete(noteId)

     if(!note){
        return res.status(404).json({
            message: "Data note found with given ID"
        })
     }

     console.log(`Deleted Successfully id: ${noteId}`)
     res.status(200).json({ 
        message: `You deleted note with id ${noteId}`,
        data: note
      });
   } catch (error) {
    console.error("Error in deletePost", error)
    res.status(500).json({
    message: "Internal server error"
    })
   }
}

