import React, { useState, createContext } from 'react';

export const MobileContext = createContext();

export const MobileProvider = (props) => {
  const [mobiles, setMobiles] = useState([
    {
      mobile: 'Motorola Moto G9 Power',
      price: '$37922',
      id: 1,
      image: 'https://mercadositio.com/productos/1617805078/01_1617806149.webp?v=1150420',
      description: 'Gama Media - Motorola - 64GB',
    },
    {
      name: 'Xiaomi Redmi 9',
      price: '$23890',
      id: 2,
      image: 'https://mercadositio.com/productos/1595858218/02_1595858818.webp',
      description: 'Gama Baja - Xiaomi - 32GB',
    },
    {
      name: 'Apple iPhone 12 Pro',
      price: '$243380',
      id: 3,
      image: 'https://mercadositio.com/productos/1614977236/01_1614982183.webp?v=1150420',
      description: 'Gama Alta - Apple - 256GB',
    },
  ]);

  return (
    <MobileContext.Provider value='temptitle'>
      {props.children}
    </MobileContext.Provider>
  );
};
