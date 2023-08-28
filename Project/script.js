// Initialize an array to store recipes
var recipes = [];

// Function to add a recipe to the recipes array
const addRecipe = (recipeName, description, imageLink) => {
  const recipe = { recipeName, description, imageLink, completed: false };
  recipes.push(recipe);
};

// Function to delete a recipe from the recipes array
const deleteRecipe = (index) => {
  if (index >= 0 && index < recipes.length) {
    recipes.splice(index, 1);
  }
};

// Function to edit a recipe in the recipes array
const editRecipe = (index, newRecipeName, newDescription, newImageLink) => {
  if (index >= 0 && index < recipes.length) {
    recipes[index] = {
      ...recipes[index],
      recipeName: newRecipeName,
      description: newDescription,
      imageLink: newImageLink,
    };
  }
};

// Function to display all recipes in the recipes array
const displayRecipes = () => {
  // Clear existing displayed recipes
  displayRecipediv.innerHTML = "";

  recipes.forEach((recipe, index) => {
    const { recipeName, description, imageLink } = recipe;

    // Create elements to display recipe information
    var recipeDiv = document.createElement("div");
    var recipename = document.createElement("h1");
    recipename.textContent = `Recipe Name: ${recipeName}`;
    var recipedescription = document.createElement("p");
    recipedescription.textContent = `Recipe Description: ${description}`;
    var image = document.createElement("img");
    image.src = imageLink;

    // Create Edit button
    var editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      // Handle edit logic
      var updatedRecipeName = prompt("Enter updated recipe name:", recipeName);
      var updatedDescription = prompt("Enter updated description:", description);
      var updatedImageLink = prompt("Enter updated image link:", imageLink);

      if (updatedRecipeName && updatedDescription && updatedImageLink) {
        editRecipe(index, updatedRecipeName, updatedDescription, updatedImageLink);
        refreshRecipeDisplay();
      }
    });

    // Create Delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteRecipe(index);
      refreshRecipeDisplay();
    });

    // Append elements to the recipe div
    recipeDiv.appendChild(recipename);
    recipeDiv.appendChild(recipedescription);
    recipeDiv.appendChild(image);
    recipeDiv.appendChild(editButton);
    recipeDiv.appendChild(deleteButton);

    // Append the recipe div to the displayRecipediv
    displayRecipediv.appendChild(recipeDiv);
  });
};

// Get main container element
var main = document.getElementById("main");

// Create divs for adding and displaying recipes
var addRecipediv = document.createElement("div");
addRecipediv.className = "addRecipediv";
var displayRecipediv = document.createElement("div");
displayRecipediv.className = "displayRecipediv";
main.appendChild(addRecipediv);
main.appendChild(displayRecipediv);

// Create input fields and button for adding recipes
var recipeNameInput = document.createElement("input");
recipeNameInput.placeholder = "Recipe Name";
var recipeDescriptionInput = document.createElement("input");
recipeDescriptionInput.placeholder = "Recipe Description";
var imageLinkInput = document.createElement("input");
imageLinkInput.placeholder = "Paste Image Link";
var h1adddiv = document.createElement("h1");
var addRecipeButton = document.createElement("button");
addRecipeButton.textContent = "Add Recipe";

h1adddiv.textContent = "Add Recipe";
addRecipediv.appendChild(h1adddiv);
addRecipediv.appendChild(recipeNameInput);
addRecipediv.appendChild(recipeDescriptionInput);
addRecipediv.appendChild(imageLinkInput);
addRecipediv.appendChild(addRecipeButton);

// Event listener for adding recipes
addRecipeButton.addEventListener("click", () => {
  // Get input values
  var newRecipeName = recipeNameInput.value;
  var newDescription = recipeDescriptionInput.value;
  var newImageLink = imageLinkInput.value;

  // Call the addRecipe function
  addRecipe(newRecipeName, newDescription, newImageLink);

  // Clear input fields
  recipeNameInput.value = "";
  recipeDescriptionInput.value = "";
  imageLinkInput.value = "";

  // Refresh the displayed recipes
  refreshRecipeDisplay();
});

// Function to refresh the displayed recipes
const refreshRecipeDisplay = () => {
  displayRecipes();
};

// Initial display of recipes
displayRecipes();
