import { getAllCategories } from "@/lib/categories";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  const categories = getAllCategories();
  return (
    <>
      <h1 className="text-5xl font-bold mb-12">Categories</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {categories.map((category) => (
          <Link
            href={`/category/${category.id}`}
            key={category.id}
            className="text-center"
          >
            <div className="overflow-hidden rounded-full mb-4 relative cursor-pointer">
              <Image
                src={`/assets${category.image}`}
                alt={category?.name}
                className="w-full h-auto transform transition-transform duration-300 ease-in-out hover:scale-110"
                width={300}
                height={300}
              />
            </div>
            <h2 className="text-xl font-semibold">{category?.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}
