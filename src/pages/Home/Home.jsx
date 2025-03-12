import { useEffect, useState } from "react"
import { getNews } from "../../api/external"
import styles from "./Home.module.css"
import Loader from "../../components/Loader/Loader"

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // function that executes immediately because getNews is async function
    (async function newsApiCall() {
      try {
        const response = await getNews();
        setArticles(response);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    })();
  }, []);

  const handleCardClick = (url) => {
    window.open(url, '_blank');
  };

  if (articles.length === 0){
    return <Loader text="homepage" />
  }

  return (
    <>
      <div className={styles.header}>Latest Articles</div>
      <div className={styles.grid}>
        {articles.map((article) => (
          <div 
          className={styles.card} 
          key={article.url} onClick={() => handleCardClick(article.url)}>
            <img src={article.urlToImage} alt="" />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
