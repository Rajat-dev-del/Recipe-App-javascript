import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helper.js';

export const state = {
  recipe: {},
};
export const loadRecipe = async function(id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);
    let { recipe } = data.data; // Destructing

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe)
  } catch (error) {
    throw error;
  }
};
