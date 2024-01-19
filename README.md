# Forkify (Frontend Web-App)

## Overview

- Intro - About the project
- Description of the Project
- Links
- Copyright
- Plans for Improvement

### Intro - About the project

The Forkify web application empowers users to search for recipes using its built-in search engine. This engine sends the query string to an external API, fetching and displaying recipes associated with the specified keyword. Users can explore detailed recipe views and bookmark their favorites. Notably, when a user bookmarks a recipe, it gets saved to local storage. It's important to highlight that the current iteration of the application is exclusively built on the frontend, with all functionality residing in the client-side environment. Users are also able to submit their own recipes, but they are not saved since there is not database component on the backend at this time.

### Description of the Project

This application facilitates user interaction with an external API, specifically the Forkify API, by utilizing a query string. Upon user input, the API returns recipe results matching the provided keyword, which are then rendered on the screen. Users can select a recipe to access detailed instructions, including ingredients and step-by-step directions.

Technologically, the Forkify application employs HTML, CSS, Sass, and JavaScript, leveraging ES6 Classes for a modern application structure. The build process is managed by Parcel. The application dynamically pulls and displays recipes from the Forkify API, courtesy of Jonas Schmedtmann. Notably, users can bookmark their preferred recipes for future reference, and there's a functionality allowing the creation and local saving of custom recipes.

### Links

- The [live](https://forkify-marlon-nunez.netlify.app/) project is hosted on Netlify.
- The Forkify API (used to work with recipes) can be found [here](https://forkify-api.herokuapp.com/)

### Copyright

The project concept, design and starter code (HTML & CSS) were created by Jonas Schmedtmann ([twitter/x](accouhttps://twitter.com/jonasschmedtman?lang=en)). Jonas Schmedtmann is the copyright owner of this concept. The JavaScript portion of this project was written by Marlon Nunez when following along 10 hours of video in the [The Complete JavaScript Course 2023: From Zero to Expert](https://www.udemy.com/course/the-complete-javascript-course/) course from Udemy.

### Plans for Improvement

Additions to be added

1. Codebase Documentation using JSDoc:
   Enhance the codebase documentation by incorporating JSDoc comments throughout the source code. Provide detailed comments for functions, methods, and complex logic to improve code readability and understanding.

2. Pagination Enhancement:
   Display the number of pages between the pagination buttons to give users a clearer indication of the available pages within the search results.

3. Sorting Functionality:
   Implement the ability to sort search results based on the duration or number of ingredients in each recipe. This provides users with options to organize and find recipes more efficiently.

4. Ingredient Validation:
   Prior to form submission, enhance the user experience by performing ingredient validation in the view, ensuring that the entered data is accurate and meets specified criteria.

5. Recipe Ingredient Input Improvement:
   Revamp the recipe ingredient input by separating it into multiple fields, allowing for a more organized and user-friendly input process. Additionally, expand the limit to accommodate more than six ingredients.

Possible new features

1. Shopping List Feature:
   Add a button on each recipe to enable users to add ingredients directly to a shopping list.

2. Weekly Meal Planning:
   Implement a feature that allows users to assign recipes to the next 7 days, providing a visual representation on a weekly calendar.

3. Nutrition Data Integration:
   Utilize the Spoonacular API to fetch nutrition data for each ingredient and calculate the total calories for a recipe.

4. Recipe Directions Modal:
   Introduce a modal that pops up with detailed directions for creating the recipe, enhancing the user's cooking experience.

5. Backend Component for User Accounts:
   Consider adding a backend component using Node.js to allow users to create accounts, providing a more comprehensive and personalized experience.
