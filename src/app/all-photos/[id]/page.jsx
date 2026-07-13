import PhotoDetailsCard from '@/components/PhotoDetailsCard/PhotoDetailsCard';
import React from 'react';

const PhotoDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://ai-generatedphoto-fetbdz0xi-abdullas-projects-20dad9cd.vercel.app/data.json",
  );

  const photos = await res.json();

  const photo = photos.find((p) => p.id == id);
  

    return <div className="max-w-7xl mx-auto">
      <PhotoDetailsCard photo={photo}></PhotoDetailsCard>
  </div>;
};

export default PhotoDetailsPage;