/* Task2 - Add a variable const button = document.querySelectorAll(".buttonFilter"); - const images = document.querySelectorAll(".imageFilter");*/
const button = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".imageFilter");
const animalRadios = document.getElementsByName('animalType')

// console.log(images, animalRadios);

/* Task 3 - Loop through each button in the button array. - Add an event listener for each button that looks for a click event */
for (btn of button) {
        btn.addEventListener('click', filterAnimals);
    }

/* Task 3 - Grab the animal attribute with animal = this.getAttribute("animal"); */
function filterAnimals () { 
    animal = this.getAttribute("animal");
    console.log(animal);
}