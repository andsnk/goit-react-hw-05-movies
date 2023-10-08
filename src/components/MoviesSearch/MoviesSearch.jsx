import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'api/api';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import css from './MoviesSearch.module.css';

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
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.error(error);
        setError('There was an error fetching the search results.');
      } finally {
        setIsLoading(false);
      }
    };

    query && fetchSearchMovies();
  }, [query]);

  return (
    <div>
      {error && <p>error</p>}
      <SearchForm onSubmit={handleSetSearchQuery} />
      {isLoading && <Loader />}
      {movies.length > 0 ? (
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
      ) : (
        <p>Not data found</p>
      )}
    </div>
  );
};

export default MovieSearch;
