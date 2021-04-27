import React, { useContext, useState } from 'react';
import { MobileContext } from '../../MobileContext/MobileContext'
import Mobile from '../Mobile/Mobile';

const MobileList = () => {
  const value = useContext(MobileContext);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

export default MobileList;
