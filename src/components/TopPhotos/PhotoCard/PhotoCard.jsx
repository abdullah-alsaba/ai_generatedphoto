import { Card, Chip,Button } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { HeartFill } from "@gravity-ui/icons";
import { ArrowDownToLine } from "@gravity-ui/icons";

const PhotoCard = ({ topPhoto }) => {
  const { imageUrl, title, likes, downloads, category } = topPhoto;
  return (
    <Card className="border rounded-xl">
      <div className="relative w-full aspect-square">
        <Image
          src={imageUrl}
          fill
          alt={title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=" object-cover rounded-xl"
              />
              <Chip className="absolute right-2 top-2">{ category}</Chip>
      </div>

      <div>
        <h2 className="font-medium">{title}</h2>
      </div>

      <div className="flex gap-10 items-center mb-4 mt-4">
        <div className="flex gap-2  items-center">
          <HeartFill className="text-red-600"></HeartFill>
          <p>{likes}</p>
        </div>

        <div className="flex gap-2  items-center">
          <ArrowDownToLine></ArrowDownToLine>
          <p>{downloads}</p>
        </div>
          </div>
          
          <Button variant="outline" className={"w-full"}> View</Button>
    </Card>
  );
};

export default PhotoCard;
