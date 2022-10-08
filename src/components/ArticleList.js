import { Link } from 'react-router-dom';

 const ArticleList = ( {articles,title} ) =>{
     return(
        <div className='article-list'>
            <h2>{title}</h2>
                {
                    articles.map(
                        articles.map(article =>(
                            <div className='blog-preview' key={article.id}>
                                <Link to={`/articles/{blog.id}`}>
                                    <h2>{blog.title}</h2>
                                    <p>Written by {article.author}</p>
                                </Link>
                                </div>
                        ))
                    )
                }
        </div>
     );
 }


export default ArticleList;
