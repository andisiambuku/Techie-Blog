import { Link } from 'react-router-dom';
import React from 'react';

 const ArticleList = ( {articles,title} ) =>{
     return(
        <div className='article-list'>
            <h2>{title}</h2>
                {
                    
                        articles.map(article =>(
                            <div className='blog-preview' key={article.id}>
                                <Link to={`/articles/{article.id}`}>
                                    <h2>{article.title}</h2>
                                    <p>Written by {article.author}</p>
                                </Link>
                                </div>
                        ))
                    
                }
        </div>
     );
 }


export default ArticleList;
