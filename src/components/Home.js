import ArticleList from "./ArticleList";
import useFetch from "../hooks/useFetch";
import React from "react";

function Home(){
    const {data: articles, isPending, error} = useFetch('http://localhost:3001/articles');

    return(
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            <div>
                <h2 className="text-center mt-4 text-4xl text-gray-600 font-bold">All Posts</h2>
            <ArticleList  articles={articles} />
            </div>
        </div>
    );

}

export default Home;
