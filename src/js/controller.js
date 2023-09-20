import * as model from "./model.js";
import RecipeView from "./views/RecipeView.js";

import "core-js/actual";
import "regenerator-runtime/runtime";
// https://forkify-api.herokuapp.com/v2
// API key: 0d4f8a7f-9c63-488a-9f23-59f439295694

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    RecipeView.renderSpinner();
    await model.loadRecipe(id);
    RecipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

["hashchange", "load"].forEach((ev) => window.addEventListener(ev, controlRecipes));
