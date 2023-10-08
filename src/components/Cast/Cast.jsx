import { getMovieCast } from 'api/api';
import Loader from 'components/Loader/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import Notiflix from 'notiflix';

const Cast = ({ baseImgUrl }) => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchCastData() {
      try {
        setIsLoading(true);
        setError('');
        const castData = await getMovieCast(id);
        setCasts(castData.cast);
      } catch (error) {
        Notiflix.Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCastData();
  }, [id]);

  return (
    <div className={css.castWrap}>
      {isLoading && <Loader />}
      {error && { error }}

      <ul className={css.castList}>
        {casts.length === 0 ? (
          <p>We don’t have any casts for this movie.</p>
        ) : (
          casts.map(({ id, name, character, profile_path }) => {
            const imageUrl = profile_path
              ? `${baseImgUrl}${profile_path}`
              : `${process.env.PUBLIC_URL}/notfound.jpg`;
            return (
              <li className={css.castItem} key={id}>
                <img src={imageUrl} alt={name} height={'300px'} />

                <div className={css.castInfoWrap}>
                  <p className={css.castName}>{name}</p>
                  <p>Character: {character}</p>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Cast;
