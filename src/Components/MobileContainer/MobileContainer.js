import React, { useContext, useState } from 'react';
import { MobieContext } from '../../MobileContext/MobileContext';
import Mobile from '../Mobile/Mobile';

const MobileConainer = () => {
  const value = useContext(MobileContext);

  return (
    <div>
       {value.map((value) => {
        return <Mobie name={mobile.name} />;
      })} 
      <h1>{value}</h1>
    </div>
  );
};

export default MovieList;
