
const searchButton = document.getElementById('button-addon2');
const apiKey = 'ac0d6fdd42e9490c9186a4a13ee7ab15';
//let searchedIngredient = [];
const ingredientInput = document.getElementById('floatingInput').value;
const spoonacularURL = 'https://api.spoonacular.com/recipes/findByIngredients?' + apiKey + '&ingredients=' + ingredientInput;
console.log(spoonacularURL);

//todo: event listener for button
searchButton.addEventListener('click', function(event){
    event.preventDefault();
    
    //todo: fetch api data
    fetch(spoonacularURL) //calls api
    .then(function (response) {
    if (response.status === '404') {
        console.log(err);
    } else {
        return response.json();
    }
    })
    .then(function (data) {
    console.log(data); //console logs data from api
    
});
})



