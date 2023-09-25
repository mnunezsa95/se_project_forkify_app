import * as model from "./model.js";
import RecipeView from "./views/RecipeView.js";
import SearchView from "./views/SearchView.js";

import "core-js/actual";
import "regenerator-runtime/runtime";

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    RecipeView.renderSpinner();
    await model.loadRecipe(id);
    RecipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err);
    RecipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    // resultsView.renderSpinner();
    const query = SearchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
    // resultsView.render(model.getSearchResultsPage());
    // paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

controlSearchResults();

const init = function () {
  RecipeView.addHandlerRender(controlRecipes);
  SearchView.addHandlerSearch(controlSearchResults);
};

init();
