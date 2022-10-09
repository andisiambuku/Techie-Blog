import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddNew() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending,setisPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) =>  {
        e.preventDefault();
        const article ={ title, body, author };
        setisPending(true);

        fetch('http://localhost:3000/articles',{
            method:'POST',
            heders:{"Content-Type":"application/json"},
            body: JSON.stringify(article)
        }).then(()=>{
            setisPending(false);
            navigate.push('/');
        })
    } 
    
    return(
        <div className="create">
            <h2>Add a New Post</h2>
            <form onSubmit={handleSubmit}>
                <label>Article Title</label>
                    <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}                    
                    />
                <label>Article Body: </label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Article Author:</label>
                    <input 
                    type="text"
                    required
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)} 
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>

        </div>
    );








}
export default AddNew;