import { getCategoryNameById } from "@/lib/categories";
import { getRecipiesByCategory } from "@/lib/recipies";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page({ params }) {
  const { categoryId } = params;
  const categoryName = getCategoryNameById(categoryId);
  const recipesByCategory = getRecipiesByCategory(categoryId); 
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {categoryName}
            <span className="text-gray-500 text-2xl font-normal">
              ({recipesByCategory.length} Recipes)
            </span>
          </h1>
          <p className="text-gray-600">
            One thing I learned living in the Canarsie section of Brooklyn, NY
            was how to cook a good Italian meal. Here is a recipe I created
            after having this dish in a restaurant. Enjoy!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {recipesByCategory.map((recipe,i) => (
          <Link
            href={`${categoryId}/${recipe.title}}`}
            className="bg-white rounded-lg overflow-hidden shadow-md"
            key={i}
          >
            <Image
              src={`/assets/thumbs/${recipe.thumbnail}`}
              alt={recipe.title}
              className="w-full h-48 object-cover"
              width={300}
              height={300}
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{recipe.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
