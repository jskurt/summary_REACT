import { useEffect, useState } from "react";

function REACTmovieApp() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
  //   )
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //     });
  // }, []);

  const getMovies = async () => {
    // const response = await fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    // );
    // const json = await response.json();
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
}

export default REACTmovieApp;
