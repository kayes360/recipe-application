import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function PopularCategories({ categories }) {
  return (
    <section className="mb-16">
      <div className="flex justify-between items-top">
        <h2 className="text-3xl font-bold mb-8">Popular Categories</h2>
        <Link href="/category" className="text-orange-500">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.slice(0, 6).map((category) => (
          <Link href={`/category/${category.id}`} key={category.id} className="cursor-pointer text-center group">
            <div className="overflow-hidden rounded-full mb-2 w-20 h-20 mx-auto">
              <Image
                src={`/assets${category.image}`}
                // src={`/assets/thumbs/${recipe.thumbnail}`}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                width={200}
                height={200}
              />
            </div>
            <p className="transition-transform duration-300 group-hover:scale-105">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
