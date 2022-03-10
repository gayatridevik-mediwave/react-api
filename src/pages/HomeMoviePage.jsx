import Page from "../components/Page";
import { apiGetMovies } from "../services/movieApi";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeMoviePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const request = axios.CancelToken.source();
    async function getMovies() {
      try {
        const response = await apiGetMovies({ cancelToken: request.token });
        setMovies(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    getMovies();
    return () => {
      request.cancel();
    };
  }, []);

  return (
    <Page title="Home Page">
      <h1> hello world </h1>
      {movies.map((m) => (
        <div key={m.id}>
          <p>{m.id}</p>
          <p>{m.name}</p>
          <p>{m.year}</p>
          <p>{m.rating}</p>
          <p>{m.genre}</p>
          <img src={m.image.url} alt={m.altInfo} />
        </div>
      ))}
    </Page>
  );
};

export default HomeMoviePage;
