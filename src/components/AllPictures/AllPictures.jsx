import React from 'react';
import PhotoCard from '@/components/TopPhotos/PhotoCard/PhotoCard';
import Category from '../Category/Category';


const AllPictures = async ({ searchParams }) => {
  const {category}  = await searchParams;
console.log(searchParams);
console.log(searchParams?.category);
       const res = await fetch(
      "https://ai-generatedphoto-fetbdz0xi-abdullas-projects-20dad9cd.vercel.app/data.json",
    );

    const photos = await res.json();

  const filterPhotos = category ? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : photos;
    return (
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mt-6 mb-6">All Photos</h1>
        <Category></Category>
        <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 ">
          {filterPhotos.map((photo) => (
            <PhotoCard photo={photo} key={photo.id}></PhotoCard>
          ))}
        </div>
      </div>
    );
};

export default AllPictures;