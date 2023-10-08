import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getMovieById } from 'api/api';
import Loader from 'components/Loader/Loader';
import css from './MoviesItem.module.css';

const MoviesItem = ({ baseImgUrl }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    async function fetchMovieData() {
      try {
        setIsLoading(true);
        setError('');
        const movieData = await getMovieById(id);
        // console.log(movieData);
        setMovie(movieData);
      } catch (error) {
        setError(error.message);
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieData();
  }, [id]);

  // if (isLoading) {
  //   return <Loader />;
  // }

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { poster_path, title, overview, release_date, vote_average, genres } =
    movie;
  const releaseDate = new Date(release_date);

  return (
    <div className={css.movieWrap}>
      <button className={css.backBtn} onClick={handleGoBack}>
        Go back
      </button>
      {isLoading && <Loader />}
      {error && { error }}
      <div className={css.movieContainer}>
        <img
          className={css.movieImg}
          src={`${baseImgUrl}${poster_path}`}
          alt={title}
        />
        <div className={css.movieInfoWrap}>
          <h1 className={css.moviesTitle}>
            {title} <span>{`(${releaseDate.getFullYear()})`}</span>
          </h1>
          <p>User Score: {Math.round(vote_average * 10)}%</p>
          <h2 className={css.moviesTitle}>Overview</h2>
          <p>{overview}</p>
          <h2 className={css.moviesTitle}>Genres</h2>
          <ul>
            {genres &&
              genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>

          <h2 className={css.moviesTitle}>Additional information</h2>
          <ul className={css.movieInfoList}>
            <li className={css.movieInfoItem}>
              <Link
                className={css.movieInfoLink}
                to="cast"
                state={{ from: location?.state?.from ?? '/' }}
              >
                Cast
              </Link>
            </li>
            <li className={css.movieInfoItem}>
              <Link
                className={css.movieInfoLink}
                to="reviews"
                state={{ from: location?.state?.from ?? '/' }}
              >
                Review
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoviesItem;
