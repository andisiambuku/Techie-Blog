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

        fetch('http://localhost:3001/articles',{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(article)
        })
        .then((res)=> res.json())
        .then(()=>{
            setAuthor('');
            setBody('');
            setTitle('');
            setisPending(false);
            navigate('/');
        })
    } 
    
    return(
        <div className="p-8">
            <h2 className='text-3xl text-gray-600 font-bold'>Add a New Post</h2>
            <form className='p-4 flex flex-col' onSubmit={handleSubmit}>
                <label className='pb-4 mt-4'>Article Title:</label>
                    <input className='p-2 border border-solid border-gray-300'
                    type="text"
                    required
                    value={title}
                    placeholder="Add a title"
                    onChange={(e)=>setTitle(e.target.value)}                    
                    />
                    <label className='pb-4 mt-4'>Article Author:</label>
                    <input className='p-2 border border-solid border-gray-300 '
                    type="text"
                    required
                    value={author}
                    placeholder="Add your name"
                    onChange={(e)=>setAuthor(e.target.value)} 
                />
                <label className='mt-4 pb-4'>Article Body: </label>
                <textarea className='py-10 border border-solid border-gray-300'
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                
                {!isPending && <button className='mx-80 p-2 mt-6 border border-gray-400 rounded-full text-gray-600'>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>

        </div>
    );








}
export default AddNew;