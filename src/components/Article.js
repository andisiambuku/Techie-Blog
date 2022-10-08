import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';


function Article() {
    const { id } = useParams();
    const { data: article,error,isPending } = useFetch('http://localhost:8000/articles/' +id);
    const navigate = useNavigate();

    const handleClick = () =>{
        fetch('http://localhost:8000/articles/' + article.id,{
            method:'DELETE'
        }).then(() => {
            navigate.push('/');
        })
    }
    return(
        <div className='article-detail'>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article>
                <h2>{article.title}</h2>
                <p>Written by {article.author}</p>
                <div>{article.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>

        </div>
    );


}

export default Article;