import ArticleList from "./ArticleList";
import useFetch from "../hooks/useFetch";
import React from "react";

function Home(){
    const {data: articles, isPending, error} = useFetch('http://localhost:3004/articles');

    return(
        <div className="home">
            { error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            <ArticleList articles={articles} title="All Posts"/>
        </div>
    );

}

export default Home;