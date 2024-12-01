import { getRecipiesByCategory } from "@/lib/recipies";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RelatedRecepies({ categoryId }) {
  const recipesByCategory = getRecipiesByCategory(categoryId);
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8">You might also like </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {recipesByCategory.slice(0, 4).map((recipe) => (
          <Link
            href={`/category/${recipe.category_id}/${encodeURIComponent(
              recipe.title
            )}`}
            key={recipe.title}
          >
            <Image
              src={`/assets/thumbs/${recipe.thumbnail}`}
              alt="Recipe 1"
              className="w-full h-60 object-cover rounded-lg mb-2"
              height={300}
              width={300}
            />
            <h3 className="font-semibold">{recipe.title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
