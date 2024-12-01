import { getAllCategories } from "@/lib/categories";
import { getAllRecipies } from "@/lib/recipies"; 
import Hero from "./components/Home/Hero";
import SuperDeliciousSection from "./components/Home/SuperDeliciousSection";
import PopularCategories from "./components/Home/PopularCategories";
import HandPickedCollection from "./components/Home/HandPickedCollection";
import LatestRecipe from "./components/Home/LatestRecipe";

export default function Home() {
  const categories = getAllCategories();
  const recipes = getAllRecipies();
 
  return (
    <>
      <Hero recipes={recipes} />

      <SuperDeliciousSection recipes={recipes} />

      <PopularCategories categories={categories} />
      <section className="mb-16 bg-orange-100 p-8 rounded-lg overflow-hidden">
        <h2 className="text-3xl font-bold mb-4">Deliciousness to your inbox</h2>
        <p className="text-gray-600 mb-4">
          Enjoy weekly hand picked recipes and recommendations
        </p>
        <form className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow px-4 py-2 rounded-full"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
          >
            Join
          </button>
        </form>
      </section>
      <HandPickedCollection recipes={recipes} />
      

      <LatestRecipe  recipes={recipes}/>
    </>
  );
}
