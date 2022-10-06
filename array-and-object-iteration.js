/* Step 1. You are given an array of dairy products:

var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
Create a function called logDairy. Within it, console log each of the items in the dairy array, using the for...of loop.


Step 2. You are given the following starter code:
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;
Create a function called birdCan, within it, loop over the bird object's properties and console log each one, using the for...of loop. Remember, you need to console log both the key and the value of each of the bird object's properties.

Step 3. Using the same starter code as in task 2, create a function called `animalCan` and within it, loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop.

*/

const animal = {

    canJump: true
    
    };
    
    const bird = Object.create(animal);
    
    bird.canFly = true;
    
    bird.hasFeathers = true;
    
    
    
    function birdCan() {
        for (keys of Object.keys(bird))
            console.log(keys + ': ' + bird[keys])
    }
    
    birdCan();


    
function animalCan() {
    for (prop in bird) {
        console.log(prop + ': ' + bird[prop])
    }
}

animalCan();