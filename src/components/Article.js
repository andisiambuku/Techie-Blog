import React  from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';



function Article() {
    const { id } = useParams();
    // const [articles,setArticles]= useState('');
    const { data: article,error,isPending } = useFetch(`http://localhost:3001/articles/${id}`);
    const navigate = useNavigate();
    console.log(id)
    console.log(article)
    console.log(error)


    const handleClick = () =>{
        console.log(id)
        fetch('http://localhost:3001/articles/' + id,{
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
            <article className='p-8'>
            <button className="bg-red-600 p-2 border border-gray-400 rounded-full text-white" onClick={handleClick}>Delete Article</button>
                <h2 className="text-3xl text-gray-600 font-bold text-center pb-4 font-sans">{ article.title }</h2>
                <p className='font-sans text-gray-600 font-bold pb-4'>Written by { article.author }</p>
                <div className='font-sans text-gray-600 pb-4'>{ article.body }</div>
                
            </article>

        </div>
    );


}

export default Article;