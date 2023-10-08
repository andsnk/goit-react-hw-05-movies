import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'api/api';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import css from './MoviesSearch.module.css';
import Notiflix from 'notiflix';

const MovieSearch = () => {
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('search');

  const handleSetSearchQuery = value => {
    setSearchParams({ search: value });
  };

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        setIsLoading(true);
        setError('');
        const data = await getSearchMovie(query);
        if (data.results.length === 0) {
          Notiflix.Notify.info('Movies not found');
          setMovies([]);
        }
        setMovies(data.results);
      } catch (error) {
        setError(error.message);
        Notiflix.Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    query && fetchSearchMovies();
  }, [query]);

  return (
    <div>
      <SearchForm onSubmit={handleSetSearchQuery} />
      {isLoading && <Loader />}
      {query && movies.length > 0 && !error ? (
        <div className={css.searchMoviesWrap}>
          <h2 className={css.searchMoviesTitle}>Search Results</h2>
          <ul>
            {movies.map(movie => (
              <li className={css.searchMoviesItem} key={movie.id}>
                <Link
                  className={css.searchMoviesLink}
                  to={`${movie.id}`}
                  state={{ from: location }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default MovieSearch;
