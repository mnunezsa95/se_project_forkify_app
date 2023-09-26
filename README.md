# Forkify

## Overview

- Intro - About the project
- Description of the Project
- Links
- Copyright
- Plans for Improvement

### Intro - About the project

This application allows the user to make a call to an external API (Forkify API), using a query string. The API will return results (in the form of recipes) that match the keyword entered by the user. These recipes are rendered on the screen and can be selected to provide further instructions. The user can view the ingredients and navigate to the directions of the recipe.

### Description of the Project

The Forkify application uses HTML, CSS, Sass, JavaScript, ES6 Classes, and parcel to create a very simply modern application structure. The application pulls from the Forkify API (created by Jonas Schmedtmann) to pull recipes based on a query string provided by the user. The application also allows for recipes to be bookmarked by the user, allowing them to save their favorite recipes for later. Additionally, users can create their own recipes and save them locally.

### Links

The project is hosted on GitHub Pages and can be seen live using the this [link]().
The Forkify API (used to work with recipes) can be found [here](https://forkify-api.herokuapp.com/)

### Copyright

The project concept, design and starter code (HTML & CSS) were created by Jonas Schmedtmann ([twitter/x](accouhttps://twitter.com/jonasschmedtman?lang=en)). Jonas Schmedtmann is the copyright owner of this concept. The JavaScript portion of this project was written by Marlon Nunez when following along 10 hours of video in the [The Complete JavaScript Course 2023: From Zero to Expert](https://www.udemy.com/course/the-complete-javascript-course/) course from Udemy.

### Plans for Improvement

- The JavaScript portion of this project can be made more universal allowing it to be easier to maintain and scale.
- As of right now, the user must navigate away from the application in order to see the actual directions for the recipe. In the future, the user would be able to click on a button to allow for a modal, with the directions to open up, allowing for a more user-friendly application.
- A backend component can be added to the project to allow for users to create their own account on a local Node.js server. This will allow the application to be used by external users.
