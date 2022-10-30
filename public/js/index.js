//const { add } = require("lodash");

const pickedIngredients = document.getElementById('picked-ingredients');
const fetchedRecipes1 = document.getElementById('fetched-recipes1');
const fetchedRecipes2 = document.getElementById('fetched-recipes2');
const fetchedRecipes3 = document.getElementById('fetched-recipes3');
const fetchedRecipes4 = document.getElementById('fetched-recipes4');
const fetchedRecipes5 = document.getElementById('fetched-recipes5');
const picture1 = document.getElementById('picture1');
const picture2 = document.getElementById('picture2');
const picture3 = document.getElementById('picture3');
const picture4 = document.getElementById('picture4');
const picture5 = document.getElementById('picture5');

const saveButton1 = document.getElementById('save-btn1');
const saveButton2 = document.getElementById('save-btn2');
const saveButton3 = document.getElementById('save-btn3');
const saveButton4 = document.getElementById('save-btn4');
const saveButton5 = document.getElementById('save-btn5');

saveButton1.style.display = "none";
saveButton2.style.display = "none";
saveButton3.style.display = "none";
saveButton4.style.display = "none";
saveButton5.style.display = "none";



const searchButton = document.getElementById('button-addon2');
const apiKey = 'apiKey=ac0d6fdd42e9490c9186a4a13ee7ab15';
//let searchedIngredient = [];


// event listener for button
searchButton.addEventListener('click', function(event){
    event.preventDefault();
    
    
    const ingredientInput = document.getElementById('floatingInput').value;
    const byIngredients = 'https://api.spoonacular.com/recipes/findByIngredients?' + apiKey + '&ingredients=' + ingredientInput + "&number=5";
    
    
    console.log(ingredientInput);
    pickedIngredients.innerHTML = ingredientInput;

    console.log(byIngredients);

    
    //fetch api data
    fetch(byIngredients) //calls api
   
    .then(function (response) {
    if (response.status === '404') {
        console.log(err);
    } else {
        return response.json();
    }
    })
    .then(function (data) {
    console.log(data); //console logs data from api
    //todo: have recipes show up in recipe list

    // RECIPE 1
    fetchedRecipes1.textContent = data[0].title;  // TITLE
    saveButton1.style.display = "block";          // SAVE BUTTON
    picture1.src = data[0].image;                 // IMAGE


    fetchedRecipes2.textContent = data[1].title;
    saveButton2.style.display = "block"; 
    picture2.src = data[1].image;

    fetchedRecipes3.textContent = data[2].title;
    saveButton3.style.display = "block"; 
    picture3.src = data[2].image;
    
    fetchedRecipes4.textContent = data[3].title;
    saveButton4.style.display = "block"; 
    picture4.src = data[3].image;

    fetchedRecipes5.textContent = data[4].title;
    saveButton5.style.display = "block"; 
    picture5.src = data[4].image;

        //todo: links for recipes
    const byRecipes = 'https://api.spoonacular.com/recipes/complexSearch?' + apiKey;


});
})


// homepage week tabs js

const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) =>{
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active');

        const showTab = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') === showTab) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        });
    });
});
