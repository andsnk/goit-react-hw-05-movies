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

import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom'; // Імпортуємо useSearchParams з react-router-dom
import { getSearchMovie } from 'api/api';
import Loader from 'components/Loader/Loader';

const MovieSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams(); // Отримуємо searchParams з URL

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Оновлюємо параметр "query" в URL
      searchParams.set('query', query);
      setSearchParams(searchParams);

      const data = await getSearchMovie(`?query=${query}`);
      setSearchResults(data.results);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <Loader />}

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map(movie => (
              <li key={movie.id}>
                <Link to={`${movie.id}`}>{movie.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
