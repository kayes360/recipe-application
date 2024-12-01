import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SuperDeliciousSection({ recipes }) {
  const getTopRecipes = (recipes) => {
    const sortedRecipes = recipes.sort(
      (a, b) => b.rating.rating_count - a.rating.rating_count
    );

    return sortedRecipes.slice(0, 3);
  };
  const topThreeRecipes = getTopRecipes(recipes);
  return (
    <section className="mb-16" id="super_delicious">
      <h2 className="text-3xl font-bold mb-8">Super Delicious</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {topThreeRecipes.map((recipe, index) => (
          <Link href={`/category/${recipe.category_id}/${encodeURIComponent(recipe.title)}`} key={index}>
            
            <Image
              src={`/assets/thumbs/${recipe.thumbnail}`}
              alt={recipe.title}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
              width={300}
              height={300}
            />
            <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
            <div className="flex items-center text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => {
                // Check if the current star index should be full, half, or empty
                const isFullStar = i < Math.floor(recipe.rating.average_rating);
                const isHalfStar =
                  i === Math.floor(recipe.rating.average_rating) &&
                  recipe.rating.average_rating % 1 !== 0;

                return (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill={isFullStar ? "currentColor" : "none"}
                    stroke="currentColor"
                  >
                    {isHalfStar ? (
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    ) : (
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    )}
                  </svg>
                );
              })}
            </div>
            <p className="text-gray-600">{recipe.cooking_time} </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
