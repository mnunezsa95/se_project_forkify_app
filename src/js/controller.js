import * as model from "./model.js";
import { MODAL_CLOSE_SEC } from "./config.js";
import RecipeView from "./views/RecipeView.js";
import SearchView from "./views/SearchView.js";
import ResultsView from "./views/ResultsView.js";
import PaginationView from "./views/PaginationView.js";
import BookmarksView from "./views/BookmarksView.js";
import AddRecipeView from "./views/AddRecipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    RecipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    ResultsView.update(model.getSearchResultsPage());

    // 1) Updating bookmarks view
    BookmarksView.update(model.state.bookmarks);

    // 2) Loading recipe
    await model.loadRecipe(id);

    // 3) Rendering recipe
    RecipeView.render(model.state.recipe);
  } catch (err) {
    RecipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    ResultsView.renderSpinner();

    // 1) Get search query
    const query = SearchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    ResultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    PaginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  ResultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  PaginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  RecipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  RecipeView.update(model.state.recipe);

  // 3) Render bookmarks
  BookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  BookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    AddRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    RecipeView.render(model.state.recipe);

    // Success message
    AddRecipeView.renderMessage();

    // Render bookmark view
    BookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, "", `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function () {
      AddRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error("💥", err);
    AddRecipeView.renderError(err.message);
  }
};

const init = function () {
  BookmarksView.addHandlerRender(controlBookmarks);
  RecipeView.addHandlerRender(controlRecipes);
  RecipeView.addHandlerUpdateServings(controlServings);
  RecipeView.addHandlerAddBookmark(controlAddBookmark);
  SearchView.addHandlerSearch(controlSearchResults);
  PaginationView.addHandlerClick(controlPagination);
  AddRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
