import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getMovieById } from 'api/api';
import Loader from 'components/Loader/Loader';

const MoviesItem = ({ baseImgUrl }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

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
    <div>
      {isLoading && <Loader />}
      {error && { error }}
      <img src={`${baseImgUrl}${poster_path}`} width={'200px'} alt={title} />
      <h1>
        {title} <span>{`(${releaseDate.getFullYear()})`}</span>
      </h1>
      <p>User Score: {Math.round(vote_average * 10)}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      </ul>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
    </div>
  );
};

export default MoviesItem;
