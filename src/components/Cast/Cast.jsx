import { getMovieCast } from 'api/api';
// import Loader from 'components/Loader/Loader';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = ({ baseImgUrl }) => {
  const { id } = useParams();
  const [casts, setCasts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchCastData() {
      try {
        // setIsLoading(true);
        setError('');
        const castData = await getMovieCast(id);
        console.log(castData.cast);
        setCasts(castData.cast);
      } catch (error) {
        setError(error.message);
        // } finally {
        //   setIsLoading(false);
      }
    }
    fetchCastData();
  }, [id]);

  return (
    <div>
      {/* {isLoading && <Loader />} */}
      {error && { error }}

      <ul>
        {' '}
        {casts.length === 0 ? (
          <p>We don’t have any casts for this movie.</p>
        ) : (
          casts.map(({ id, name, character, profile_path }) => {
            const imageUrl = profile_path
              ? `${baseImgUrl}${profile_path}`
              : `${process.env.PUBLIC_URL}/notfound.jpg`;
            return (
              <li key={id}>
                <img src={imageUrl} alt={name} height={'300px'} />

                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default Cast;
