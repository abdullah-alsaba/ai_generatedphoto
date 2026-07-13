import React from 'react';
import TopPhoto from './TopPhoto/TopPhoto';

const TopPhotos = async () => {
    const res = await fetch(
      "https://ai-generatedphoto-fetbdz0xi-abdullas-projects-20dad9cd.vercel.app/data.json",
    );

    const photos = await res.json();

    const topPhotos= photos.slice(0,8)
    
  

   


    return (
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mt-6 mb-6">Top Generated Pictures</h1>
        <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 '>
          {topPhotos.map((topPhoto) => (
            <TopPhoto topPhoto={topPhoto} key={topPhoto.id}></TopPhoto>
          ))}
        </div>
      </div>
    );
};

export default TopPhotos;