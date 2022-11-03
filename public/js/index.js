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

const monday = document.getElementById('mondaySaved');
const tuesday = document.getElementById('tuesdaySaved');
const wednesday = document.getElementById('wednesdaySaved');
const thursday = document.getElementById('thursdaySaved');
const friday = document.getElementById('fridaySaved');
const saturday = document.getElementById('saturdaySaved');
const sunday = document.getElementById('sundaySaved');

const mondayDiv = document.getElementById('monday');
const tuesdayDiv = document.getElementById('tuesday');
const wednesdayDiv = document.getElementById('wednesday');
const thursdayDiv = document.getElementById('thursday');
const fridayDiv = document.getElementById('friday');
const saturdayDiv = document.getElementById('saturday');
const sundayDiv = document.getElementById('sunday');

const searchButton = document.getElementById('button-addon2');
const apiKey = 'apiKey=ac0d6fdd42e9490c9186a4a13ee7ab15';

//todo: fetch recipe_names from db and display for days of week

// monday.textContent = fetch('/api/users/')


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
    //todo: button functionality for saving
    saveButton1.addEventListener('click', function(event){
        event.preventDefault();
        console.log("save recipe 1");
       
        if (mondayDiv.className !== 'is-hidden') {
            monday.textContent = fetchedRecipes1.textContent = data[0].title;
        }
        if (tuesdayDiv.className !== 'is-hidden') {
            tuesday.textContent = fetchedRecipes1.textContent = data[0].title;
        }
        if (wednesdayDiv.className !== 'is-hidden') {
            wednesday.textContent = fetchedRecipes1.textContent = data[0].title;
        }
        if (thursdayDiv.className !== 'is-hidden') {
            thursday.textContent = fetchedRecipes1.textContent = data[0].title;
        }
        if (fridayDiv.className !== 'is-hidden') {
            friday.textContent = fetchedRecipes1.textContent = data[0].title;
        }
        if (saturdayDiv.className !== 'is-hidden') {
            saturday.textContent = fetchedRecipes1.textContent = data[0].title;
        }
        if (sundayDiv.className !== 'is-hidden') {
            sunday.textContent = fetchedRecipes1.textContent = data[0].title;
        }
        
        
    });


    fetchedRecipes2.textContent = data[1].title;
    saveButton2.style.display = "block"; 
    picture2.src = data[1].image;

    saveButton2.addEventListener('click', function(event){
        event.preventDefault();
        console.log("save recipe 2");

        if (mondayDiv.className !== 'is-hidden') {
            monday.textContent = fetchedRecipes1.textContent = data[1].title;
        }
        if (tuesdayDiv.className !== 'is-hidden') {
            tuesday.textContent = fetchedRecipes1.textContent = data[1].title;
        }
        if (wednesdayDiv.className !== 'is-hidden') {
            wednesday.textContent = fetchedRecipes1.textContent = data[1].title;
        }
        if (thursdayDiv.className !== 'is-hidden') {
            thursday.textContent = fetchedRecipes1.textContent = data[1].title;
        }
        if (fridayDiv.className !== 'is-hidden') {
            friday.textContent = fetchedRecipes1.textContent = data[1].title;
        }
        if (saturdayDiv.className !== 'is-hidden') {
            saturday.textContent = fetchedRecipes1.textContent = data[1].title;
        }
        if (sundayDiv.className !== 'is-hidden') {
            sunday.textContent = fetchedRecipes1.textContent = data[1].title;
        }
        
        
    });

    fetchedRecipes3.textContent = data[2].title;
    saveButton3.style.display = "block"; 
    picture3.src = data[2].image;

    saveButton3.addEventListener('click', function(event){
        event.preventDefault();
        console.log("save recipe 3");

        if (mondayDiv.className !== 'is-hidden') {
            monday.textContent = fetchedRecipes1.textContent = data[2].title;
        }
        if (tuesdayDiv.className !== 'is-hidden') {
            tuesday.textContent = fetchedRecipes1.textContent = data[2].title;
        }
        if (wednesdayDiv.className !== 'is-hidden') {
            wednesday.textContent = fetchedRecipes1.textContent = data[2].title;
        }
        if (thursdayDiv.className !== 'is-hidden') {
            thursday.textContent = fetchedRecipes1.textContent = data[2].title;
        }
        if (fridayDiv.className !== 'is-hidden') {
            friday.textContent = fetchedRecipes1.textContent = data[2].title;
        }
        if (saturdayDiv.className !== 'is-hidden') {
            saturday.textContent = fetchedRecipes1.textContent = data[2].title;
        }
        if (sundayDiv.className !== 'is-hidden') {
            sunday.textContent = fetchedRecipes1.textContent = data[2].title;
        }
        
        
    });
    
    fetchedRecipes4.textContent = data[3].title;
    saveButton4.style.display = "block"; 
    picture4.src = data[3].image;

    saveButton4.addEventListener('click', function(event){
        event.preventDefault();
        console.log("save recipe 4");

        if (mondayDiv.className !== 'is-hidden') {
            monday.textContent = fetchedRecipes1.textContent = data[3].title;
        }
        if (tuesdayDiv.className !== 'is-hidden') {
            tuesday.textContent = fetchedRecipes1.textContent = data[3].title;
        }
        if (wednesdayDiv.className !== 'is-hidden') {
            wednesday.textContent = fetchedRecipes1.textContent = data[3].title;
        }
        if (thursdayDiv.className !== 'is-hidden') {
            thursday.textContent = fetchedRecipes1.textContent = data[3].title;
        }
        if (fridayDiv.className !== 'is-hidden') {
            friday.textContent = fetchedRecipes1.textContent = data[3].title;
        }
        if (saturdayDiv.className !== 'is-hidden') {
            saturday.textContent = fetchedRecipes1.textContent = data[3].title;
        }
        if (sundayDiv.className !== 'is-hidden') {
            sunday.textContent = fetchedRecipes1.textContent = data[3].title;
        }
        
        
    });

    fetchedRecipes5.textContent = data[4].title;
    saveButton5.style.display = "block"; 
    picture5.src = data[4].image;

    saveButton5.addEventListener('click', function(event){
        event.preventDefault();
        console.log("save recipe 5");

        if (mondayDiv.className !== 'is-hidden') {
            monday.textContent = fetchedRecipes1.textContent = data[4].title;
        }
        if (tuesdayDiv.className !== 'is-hidden') {
            tuesday.textContent = fetchedRecipes1.textContent = data[4].title;
        }
        if (wednesdayDiv.className !== 'is-hidden') {
            wednesday.textContent = fetchedRecipes1.textContent = data[4].title;
        }
        if (thursdayDiv.className !== 'is-hidden') {
            thursday.textContent = fetchedRecipes1.textContent = data[4].title;
        }
        if (fridayDiv.className !== 'is-hidden') {
            friday.textContent = fetchedRecipes1.textContent = data[4].title;
        }
        if (saturdayDiv.className !== 'is-hidden') {
            saturday.textContent = fetchedRecipes1.textContent = data[4].title;
        }
        if (sundayDiv.className !== 'is-hidden') {
            sunday.textContent = fetchedRecipes1.textContent = data[4].title;
        }
        
        
    });
});
})


        //todo: links for recipes
    const byRecipes = 'https://api.spoonacular.com/recipes/complexSearch?' + apiKey;




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

// logout button

const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', function() {
    document.location.replace('/');
});

const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener('click', function(event){
    event.preventDefault();
    monday.textContent = "";
    tuesday.textContent = "";
    wednesday.textContent = "";
    thursday.textContent = "";
    friday.textContent = "";
    saturday.textContent = "";
    sunday.textContent = "";
});