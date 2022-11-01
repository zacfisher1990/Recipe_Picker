
save1 = document.getElementById('save-btn1');

save1.addEventListener('click', async function(event){
    event.preventDefault();
    console.log("the save-recipe file button works");

    const savedRecipe = document.querySelector('#fetched-recipes1').innerHTML;

    const response = await fetch('/api/users/recipes', {
        method: 'POST',
        body: JSON.stringify({ savedRecipe }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    
})

save2 = document.getElementById('save-btn2');

save2.addEventListener('click', async function(event){
    event.preventDefault();
    console.log("the save-recipe file button works");

    const savedRecipe2 = document.querySelector('#fetched-recipes2').innerHTML;

    const response = await fetch('/api/users/recipes', {
        method: 'POST',
        body: JSON.stringify({ savedRecipe2 }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    
})

save3 = document.getElementById('save-btn3');

save3.addEventListener('click', async function(event){
    event.preventDefault();
    console.log("the save-recipe file button works");

    const savedRecipe3 = document.querySelector('#fetched-recipes3').innerHTML;

    const response = await fetch('/api/users/recipes', {
        method: 'POST',
        body: JSON.stringify({ savedRecipe3 }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    
})

save4 = document.getElementById('save-btn4');

save4.addEventListener('click', async function(event){
    event.preventDefault();
    console.log("the save-recipe file button works");

    const savedRecipe4 = document.querySelector('#fetched-recipes4').innerHTML;

    const response = await fetch('/api/users/recipes', {
        method: 'POST',
        body: JSON.stringify({ savedRecipe4 }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    
})

save5 = document.getElementById('save-btn5');

save5.addEventListener('click', async function(event){
    event.preventDefault();
    console.log("the save-recipe file button works");

    const savedRecipe5 = document.querySelector('#fetched-recipes5').innerHTML;

    const response = await fetch('/api/users/recipes', {
        method: 'POST',
        body: JSON.stringify({ savedRecipe5 }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    
})