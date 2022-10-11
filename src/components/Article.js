import React ,{ useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import ArticleList from './ArticleList';


function Article() {
    const { id } = useParams();
    // const [articles,setArticles]= useState('');
    const { data: article,error,isPending } = useFetch(`http://localhost:3001/articles/${id}`);
    const navigate = useNavigate();
    console.log(id)
    console.log(article)
    console.log(error)


    const handleClick = async (id) =>{
        await fetch('http://localhost:3001/articles/' + article.id,{
            method:'DELETE'
        })
        .then((res)=> res.json())
        .then(() => {
            navigate('/');
        })
    }
    return(
        <div className='article-detail'>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article>
                <h2>{ArticleList.title}</h2>
                <p>Written by { article.author }</p>
                <div>{ article.body }</div>
                <button onClick={handleClick}>Delete</button>
            </article>

        </div>
    );


}

export default Article;