import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async () => {
    const res = await fetch("https://ai-generatedphoto.vercel.app/category.json");
    const categories = await res.json()
   

    return (
      <div>
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`?category=${category.name.toLowerCase()}`}
          >
            <Button variant="outline" className="mb-6 mt-3 mr-3" size="sm">
              {category.name}
            </Button>
          </Link>
        ))}
      </div>
    );
};

export default Category;