import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HandPickedCollection({ recipes }) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 animate-fade-in-down">
        Hand-Picked Collections
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {recipes.slice(6, 8).map((recipe, i) => (
          <Link
          href={`category/${recipe.category_id}/${encodeURIComponent(
            recipe.title
          )}`}
            key={i}
            className="relative group overflow-hidden rounded-lg transition-transform duration-300 ease-in-out transform cursor-pointer"
          >
            <Image
              src={`/assets/thumbs/${recipe.thumbnail}`}
              alt={recipe.title}
              className="w-full h-[400px] rounded-lg object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
              width={400}
              height={400}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
              <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
              <p
                 
                className="text-orange-300 hover:underline"
              >
                View Collection
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
