import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero({ recipes }) {
  const firstRecipe = recipes?.[0];

  if (!firstRecipe) {
    return null;
  }
  return (
    <section className="mb-16 bg-orange-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src={`/assets/thumbs/${firstRecipe.thumbnail}`}
            alt={firstRecipe.title}
            className="w-full h-[450px] object-cover rounded-lg"
            width={600}
            height={300}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">{firstRecipe.title}</h1>
          <p className="text-gray-600 mb-4">{firstRecipe.description}</p>
          <Link
            href={`category/${firstRecipe.category_id}/${encodeURIComponent(
              firstRecipe.title
            )}`}
            className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block hover:bg-orange-600"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </section>
  );
}
