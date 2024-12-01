import recipes from '@/data/recipes.json';

export const getAllRecipies = () => {
  try { 
    return recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

export const getRecipieByTitle = (title) => {
    try {
      const recipe = recipes.find((recipe) => recipe.title === title);
      if (!recipe) {
        console.error(`Recipe with title "${title}" not found.`);
        return null;
      }
      return recipe;
    } catch (error) {
      console.error('Error fetching recipe by title:', error);
      return null;
    }
  };

  export const getRecipiesByCategory = (categoryId) => { 
    try {
      return recipes.filter((recipe) => recipe.category_id === categoryId);
    } catch (error) {
      console.error('Error fetching recipes by category:', error);
      return [];
    }
  };