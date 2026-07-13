import React from 'react';
import PhotoCard from '../PhotoCard/PhotoCard';

const TopPhoto = ({ topPhoto }) => {
    return (
      <div>
        <h1>
          
          <PhotoCard topPhoto={topPhoto}></PhotoCard>
        </h1>
      </div>
    );
};

export default TopPhoto;