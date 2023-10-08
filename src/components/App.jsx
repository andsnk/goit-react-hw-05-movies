import Layout from 'Layout/Layout';
import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesSearch = lazy(() => import('pages/MoviesSearch/MoviesSearch'));
const MovieDetail = lazy(() => import('pages/MovieDetail/MovieDetail'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense>
              <MoviesSearch />
            </Suspense>
          }
        />
        <Route
          path="movies/:id"
          element={
            <Suspense fallback={<Loader />}>
              <MovieDetail baseImgUrl={baseImgUrl} />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense>
                <Cast baseImgUrl={baseImgUrl} />
              </Suspense>
            }
          />
          <Route
            path="reviews"
            element={
              <Suspense>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
