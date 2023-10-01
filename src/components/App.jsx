import Layout from 'Layout/Layout';
import Cast from 'components/Cast/Cast';
import HomePage from 'pages/HomePage/HomePage';
import MovieDetail from 'pages/MovieDetail/MovieDetail';
import MoviesSearch from 'pages/MoviesSearch/MoviesSearch';
import Reviews from 'components/Reviews/Reviews';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesSearch />} />
        <Route
          path="movies/:id"
          element={<MovieDetail baseImgUrl={baseImgUrl} />}
        >
          <Route path="cast" element={<Cast baseImgUrl={baseImgUrl} />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* не забудь добавити 404 */}
      </Route>
    </Routes>
  );
};

export default App;
