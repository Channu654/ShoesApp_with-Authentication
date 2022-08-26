import React from 'react';
import { useSelector } from 'react-redux/es/exports';


const ShoeCard = ({ data }) => {
  let shoeId = null;

  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`} >
      <div>
        <img
          data-cy='shoe-card-image'
          src={data.image}
          alt=''
          
        />
      </div>
      <div>
        <div data-cy='shoe-name'>{data.name}</div>
        <div data-cy='shoe-category'>{data.category}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
