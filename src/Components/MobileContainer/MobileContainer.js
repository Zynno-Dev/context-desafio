import React, { useContext, useState } from 'react';
import { MobieContext } from '../../MobileContext/MobileContext';
import Mobilee from '../Mobile/Mobile';

const MovieList = () => {
  const value = useContext(MovieContext);
  // const [movies, setMovies] = useState([
  //   {
  //     name: 'Saving Private Ryan',
  //     price: '$10',
  //     id: 1234,
  //   },
  //   {
  //     name: 'Fight Club',
  //     price: '$12',
  //     id: 9090,
  //   },
  //   {
  //     name: 'Terminator 1',
  //     price: '$8',
  //     id: 1763,
  //   },
  // ]);

  return (
    <div>
      {/* {movies.map((movie) => {
        return <Movie name={movie.name} />;
      })} */}
      <h1>{value}</h1>
    </div>
  );
};

export default MovieList;
