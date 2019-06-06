// ask the database to gimme some data
fetch("http://localhost:8088/food")
//wait, using a promise
//recieve the data
.then((data) => {
    //convert the data to javascript(an array of objects)
    return data.json()
})
.then( (food) => {
    // loop over the array of objects
    //do stuff to the data
    console.log(food)
    
        let foodcontainer = document.querySelector("#food-list")
        food.forEach( (item) => {
            foodcontainer.innerHTML += `<h2>I like to eat ${item.name}</h2>`
    })
})
