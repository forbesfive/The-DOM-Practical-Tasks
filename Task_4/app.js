/* Task2 - Add a variable const button = document.querySelectorAll(".buttonFilter"); - const images = document.querySelectorAll(".imageFilter");*/
const button = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".imageFilter");
// const animalRadios = document.getElementsByName('animalType')

/* Task 3 - Loop through each button in the button array. - Add an event listener for each button that looks for a click event */
for (btn of button) {
        btn.addEventListener('click', filterAnimals);
    }
    
/* Task 3 - Grab the animal attribute with animal = this.getAttribute("animal"); */
function filterAnimals () { 
    // animal = this.getAttribute("animal");
    // console.log(animal);
    
    // // To be able to complete this evenings class we need a different approach:
    // console.log(document.querySelector('input[name="animalType"]:checked').value);

    /* Task 4 - Loop through each item in the images array */
    for (image of images) {
        let animalType = image.getAttribute("animal");
        let selectedAnimal = document.querySelector('input[name="animalType"]:checked').value;
        
        /* Task 4 - If animal = all change all of the containers to display:block - If animal = “tiger” then if the container contains the class tiger display:block otherwise display:none*/
        if (animalType == selectedAnimal || selectedAnimal == 'all') {
            // image.classList.remove('hidden')
            image.style.display = 'block';
        } else {
            // image.classList.add('hidden')
            image.style.display = 'none';
        }
    }
}