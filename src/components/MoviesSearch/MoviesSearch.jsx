// import { getSearchMovie } from 'api/api';
// import Loader from 'components/Loader/Loader';
// import React from 'react';
// import { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

// const MoviesSearch = () => {
//   const [query, setQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const data = searchParams.get('page');
//   console.log(data);

//   const handleChange = e => {
//     setQuery(e.target.value);
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (query.trim() === '') {
//       return alert('Enter the text in the search field');
//     }
//     try {
//       setIsLoading(true);
//       setError('');
//       const data = await getSearchMovie(`?query=${query}`);
//       console.log(data.results);
//       setSearchResults(data.results);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={query}
//           onChange={handleChange}
//           placeholder="Search..."
//         />
//         <button type="submit">Search</button>
//       </form>
//       {isLoading && <Loader />}
//       {searchResults.length > 0 && !error && (
//         <div>
//           <h2>Search Results:</h2>
//           <ul>
//             {searchResults.map(movie => (
//               <li key={movie.id}>
//                 <p>{movie.title}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MoviesSearch;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSearchMovie } from 'api/api';
import Loader from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetSearchQuery = value => {
    setSearchQuery(value);
  };

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        setIsLoading(true);
        setError('');
        const data = await getSearchMovie(searchQuery);
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.error(error);
        setError('There was an error fetching the search results.');
      } finally {
        setIsLoading(false);
      }
    };

    searchQuery && fetchSearchMovies();
  }, [searchQuery]);

  return (
    <div>
      {error && <p>error</p>}
      <SearchForm onSubmit={handleSetSearchQuery} />
      {isLoading && <Loader />}
      {movies.length > 0 ? (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {movies.map(movie => (
              <li key={movie.id}>
                <Link to={`${movie.id}`}>{movie.title}</Link>
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
