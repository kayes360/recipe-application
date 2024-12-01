import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function LatestRecipe({recipes}) {

    const getLatestRecipes = () => {
        const sortedRecipes = [...recipes].sort(
          (a, b) => new Date(b.published_date) - new Date(a.published_date)
        );
        return sortedRecipes.slice(0, 4);
      };
    
      const latestRecipes = getLatestRecipes();
    
  return (
    <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Latest Recipes</h2>
        <div className="grid md:grid-cols-4 gap-8">
        {latestRecipes.map((recipe,i) => (
          <Link href={`category/${recipe.category_id}/${encodeURIComponent(
            recipe.title
          )}`} key={i}>
            <Image
              src={`/assets/thumbs/${recipe.thumbnail}`}
              alt={recipe.title}
              className="w-full h-[300px] object-cover rounded-lg mb-4"
              width={300}
              height={300}
            />
            <h3 className="text-lg font-semibold mb-2">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.category}</p>
          </Link>
        ))}
           
        </div>
      </section>
  )
}
