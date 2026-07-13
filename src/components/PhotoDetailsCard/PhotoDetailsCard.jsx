"use client";
import toast from "react-hot-toast";
import React from "react";
import Image from "next/image";
import { Card, Chip, Button } from "@heroui/react";

import {
  HeartFill,
  ArrowDownToLine,
  Copy,
  Calendar,
  Layers3Diagonal,
  Hashtag,
} from "@gravity-ui/icons";

const PhotoDetailsCard = ({ photo }) => {
  const {
    imageUrl,
    title,
    prompt,
    category,
    model,
    resolution,
    likes,
    downloads,
    createdAt,
    tags,
  } = photo;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt);
   toast.success("Prompt copied successfully!");
  };

  return (
    <Card className="border rounded-2xl overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-8 p-6">
        {/* Left Side Image */}
        <div className="relative w-full aspect-square rounded-xl overflow-hidden">
          <Image src={imageUrl} fill alt={title} className="object-cover" />
        </div>

        {/* Right Side */}
        <div className="p-0 flex flex-col">
          {/* Title */}
          <div className="flex justify-between items-start mb-3">
            <h1 className="text-3xl font-bold">{title}</h1>

            <Chip color="primary">{category}</Chip>
          </div>

          {/* Likes + Downloads */}
          <div className="flex gap-8 mb-6">
            <div className="flex items-center gap-2">
              <HeartFill className="text-red-500" />
              <span>{likes}</span>
            </div>

            <div className="flex items-center gap-2">
              <ArrowDownToLine />
              <span>{downloads}</span>
            </div>
          </div>

          <div className="my-4" />

          {/* Prompt */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Prompt</h3>

            <Card className="bg-default-100 shadow-none border">
              <div>
                <p className="leading-7 text-default-600">{prompt}</p>
              </div>
            </Card>
          </div>

          {/* Tags */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg mb-3">Tags</h3>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Chip key={tag}>
                  <div className="flex items-center gap-1">
                    <Hashtag width={14} />
                    <span>{tag}</span>
                  </div>
                </Chip>
              ))}
            </div>
          </div>

          {/* Information */}
          <div className="mt-8 space-y-4">
            <h3 className="font-semibold text-lg">Information</h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card shadow="none" className="border">
                <div>
                  <p className="text-sm text-default-500">Model</p>
                  <p className="font-semibold">{model}</p>
                </div>
              </Card>

              <Card shadow="none" className="border">
                <div>
                  <p className="text-sm text-default-500">Resolution</p>
                  <div className="flex items-center gap-2">
                    <Layers3Diagonal width={18} />
                    <span>{resolution}</span>
                  </div>
                </div>
              </Card>

              <Card shadow="none" className="border sm:col-span-2">
                <div>
                  <p className="text-sm text-default-500">Created</p>

                  <div className="flex items-center gap-2">
                    <Calendar width={18} />
                    <span>{new Date(createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <Button color="primary" className="flex-1">
              <div className="flex items-center gap-2">
                <ArrowDownToLine />
                <span>Download</span>
              </div>
            </Button>
            <Button variant="bordered" onPress={handleCopy} className="flex-1 border">
              Copy Prompt
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PhotoDetailsCard;
