import MoviesItem from 'components/MoviesItem/MoviesItem';
import React from 'react';
import { Outlet } from 'react-router-dom';

const MovieDetail = ({baseImgUrl}) => {
  return (
    <>
    <MoviesItem baseImgUrl={baseImgUrl}/>
    <Outlet/>
    </>
  );
};
export default MovieDetail;
