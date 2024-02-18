/* Task2 - Add a variable const button = document.querySelectorAll(".buttonFilter"); - const images = document.querySelectorAll(".imageFilter");*/
const button = document.querySelectorAll(".buttonFilter");
const images = document.querySelectorAll(".imageFilter");
// const animalRadios = document.getElementsByName('animalType')
const form = document.getElementById('filters');

/* Task 3 - Loop through each button in the button array. - Add an event listener for each button that looks for a click event */
for (btn of button) {
        btn.addEventListener('click', filterAnimals);
    }
    
/* Task 5 - Add a keyup event to the search box*/
const entry = document.getElementById('search');

entry.addEventListener('keyup', function (event) {
    event.preventDefault();
    filterAnimals();
})
    
/* Task 3 - Grab the animal attribute with animal = this.getAttribute("animal"); */
function filterAnimals () { 
    // animal = this.getAttribute("animal");
    // console.log(animal);
    
    // // To be able to complete this evenings class we need a different approach:
    // console.log(document.querySelector('input[name="animalType"]:checked').value);
    let selectedAnimal = document.querySelector('input[name="animalType"]:checked').value;
    
    /* Task 4 - Loop through each item in the images array */
    for (image of images) {
        let animalType = image.getAttribute("animal");
        let searchTerm = entry.value.toLowerCase();
        /*Task 6 - Add some helper text above the images that says something like “showing animals that match the search “{searchString}” and the filter {filter}*/
        document.getElementById('summary').innerHTML = `Showing animals that match the search "${searchTerm}" and the filter "${selectedAnimal}"`;
        
        /* Task 4 - If animal = all change all of the containers to display:block - If animal = “tiger” then if the container contains the class tiger display:block otherwise display:none*/
        if (animalType == selectedAnimal || selectedAnimal == 'all') {
            // image.classList.remove('hidden');
            image.style.display = 'block';
            let imgDesc = image.getAttribute('alt').toLowerCase();
            /* Task 5 - The text entered should be used to filter based on the image alt attribute (or use the src attribute if you have no alts) - The selected filter button should also be taken into account*/
            if (imgDesc.includes(searchTerm)) {
                // image.classList.remove('hidden')
                image.style.display = 'block';
            } else {
                // image.classList.add('hidden')
                image.style.display = 'none';
            }
        } else {
            // image.classList.add('hidden');
            image.style.display = 'none';
        }
        
    }

    selected();
}

/* Function to - Task 6 - Add CSS classes that show which filter is currently selected by adding a border to the clickable element.*/
function selected () {
    // clear selected class from all buttons
    for (btn of button) {
        form.querySelector(`label[for=${btn.value}]`).classList.remove('selected');
        btn.classList.remove('selected')
    }
    
    //add selected class from all buttons
    let selectedAnimal = document.querySelector('input[name="animalType"]:checked').value;
    checkedBox = form.querySelector(`label[for=${selectedAnimal}]`)
    checkedBox.classList.add('selected')
    console.log(`checkedBox = ${checkedBox.innerHTML}`)
}