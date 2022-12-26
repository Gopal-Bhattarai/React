import { useEffect,  useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

const News = ({pageSize, category, keywords}) => {
const [articles, setArticles] = useState([]);
const [loading, setLoading] = useState(false);
const [page, setPage] = useState(1);
const [totalArticles, setTotalArticles] = useState(0);
//const [count, setCount] = useState(0)
let count = 0;

const updateNewsData = async (newURL) => {
    const URL = newURL;

        setLoading(false)
        let response = await fetch(URL);
        let data = await response.json();
        setArticles(data.articles);
        setTotalArticles(data.totalResults);
        setLoading(true)
        // console.log(articles);
}

  useEffect(() => {
    updateNewsData(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7a7f383fbf134e72af12d6725196c61e&page=${page}&pageSize=${pageSize}`);
    // eslint-disable-next-line 
  },[])

  const handleNextClick = () => {
    if(!(page+1 > Math.ceil(totalArticles/pageSize))) {
        setPage(page + 1);
        updateNewsData(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7a7f383fbf134e72af12d6725196c61e&page=${page+1}&pageSize=${pageSize}`);
    }
  }

  const handlePrevClick = () => {
    setPage(page - 1);
    updateNewsData(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=7a7f383fbf134e72af12d6725196c61e&page=${page-1}&pageSize=${pageSize}`);
  }

  return (
    <div className="container my-3 text-center">
      <h2 className="text-center my-3">My News - <span style={{ color: "navy", fontStyle: "italic" }}>{category}</span></h2>
      {!loading && <Spinner /> }
      <small>showing {!count?articles.length:count} results out of {totalArticles} articles</small>
      
      <div className="row">
        { // eslint-disable-next-line
        loading && articles.map((article)=>{
            if(article.title.toLowerCase().includes(keywords.toLowerCase())) {
             return (
             <div className="col-md-4" key={article.url}>
                <NewsItem 
                title={article.title} 
                description={article.description} 
                imageUrl={article.urlToImage}
                url={article.url}
                author={article.author}
                date={article.publishedAt}
                source={article.source.name}
                />
                </div> 
              )
            }
            })
        }
        
      </div>
      <div className="container d-flex justify-content-between">
        {!(page<=1) && <button className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button> }
        {!(page+1 > Math.ceil(totalArticles/pageSize)) && <button className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button> }
      </div>
    </div>
  );
};

export default News;
