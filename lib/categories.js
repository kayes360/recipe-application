import categories from '@/data/categories.json';

export const getAllCategories = () => {
  try { 
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getCategoryNameById = (categoryId) => {
    const category = categories.find(category => category.id === categoryId);
    if (!category) {
      console.error(`Category with id "${categoryId}" not found.`);
      return null;
    }
    return category.name;
  };
  