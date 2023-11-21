import React, { useState, useEffect } from "react";
import styles from "./Giphy.module.css";

const Giphy = () => {
  const TRENDING_GIPHY_API = `https://api.giphy.com/v1/gifs/trending?api_key=1FLqq5DyGFhpcO7K4pnQl0wsXvwZUSbw&limit=25&rating=g&lang=en&bundle=messaging_non_clips`;

  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGifs = (api) => {
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        if (result.data && result.data.length > 0) {
          setGifs(result.data.map((gif) => gif.images.fixed_height.url));
          setError(null);
        } else {
          setGifs([]);
          setError("No search results found.");
        }
      })
      .catch((err) => {
        setLoading(false);
        setGifs([]); 
        setError("Not found.");
        console.error("Error fetching GIFs:", err);
      });
  };

  useEffect(() => {
    fetchGifs(TRENDING_GIPHY_API);
  }, []);

  const searchGif = () => {
    if (search.length > 0) {
      const searchApi = `https://api.giphy.com/v1/gifs/search?api_key=1FLqq5DyGFhpcO7K4pnQl0wsXvwZUSbw&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
      fetchGifs(searchApi);
    } else {
      setError("Please enter a search term.");
    }
  };

  return (
    <div>
      <div className={styles.cont}>
        <input
          type="text"
          placeholder="Search.."
          className={styles.search}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchGif} type="submit" className={styles.btn}>
          SearchGif
        </button>
      </div>
      {error ? <p className={styles.error}>{error}</p> : null}
      {loading && (
        <div className="loading">
          <div className="loader"></div>
        </div>
      )}
      <div className={styles.list}>
        {gifs.map((gif, index) => (
          <div className={styles.item} key={index}>
            <img src={gif} alt={`gif-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Giphy;
