import { getAllMovie } from 'api/api';
import Loader from 'components/Loader/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError('');
        const moviesData = await getAllMovie();
        console.log(moviesData);
        setMovies(moviesData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={css.trendingWrap}>
      {isLoading && <Loader />}
      {error && { error }}
      <h1 className={css.trendingTitle}>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li className={css.trendingItem} key={movie.id}>
            <Link
              className={css.trendingLink}
              to={`movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
