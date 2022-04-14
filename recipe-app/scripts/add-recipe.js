let allRecipes = getAllRecipes()
const recipe = {
    id: '',
    name: '',
    description: '',
    ingredients: []
}


document.querySelector('#ingredient-form').addEventListener('submit', (e) => {
    e.preventDefault()
    addIngredient(e, recipe.ingredients);
    e.target.elements[0].value = ''
    renderIngredients(recipe.ingredients)
})


document.querySelector('#add-recipe').addEventListener('click', () => {
    const recipeName = document.querySelector('#recipe-name')
    const recipeDescription = document.querySelector('#recipe-description')
    recipe.id = window.location.hash.substr(1)
    if (recipeName.value.length === 0){
        recipe.name = 'Unnamed Recipe'
    } else {
    recipe.name = recipeName.value
    }
    recipe.description = recipeDescription.value
    
    allRecipes.push(recipe)
   
    saveRecipes(allRecipes)
    
    window.location.assign('./index.html')
})
