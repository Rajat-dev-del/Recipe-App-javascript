import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';




// NEW API URL (instead of the one shown in the video)
// https://forkify-api.jonas.io

///////////////////////////////////////



const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    if(!id) return;

    //Loading Spinner (Loading...)
    recipeView.renderSpinner();
    
    // 1) Loading recipe
    await model.loadRecipe(id);

    //2) Rendering Recipe
    recipeView.render(model.state.recipe);

  } catch (error) {
    recipeView.renderError();
  }
};

const init = () => {
  recipeView.addHandleRender(controlRecipes);
}

init();