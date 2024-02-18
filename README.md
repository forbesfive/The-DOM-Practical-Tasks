# The-DOM-Practical-Tasks

Initial codepen/template codepen.io/andrushka/pen/rNdQmOd

We are going to be creating a page that showcases some of our favourite animals. The page must contain some filters that will show/ hide the animals based on which filters are clicked. For example if you have images of pandas, tigers, lions and giraffes, when the giraffe filter is clicked the other animals get hidden.

We will also have a text input that can be used to filter the images based on their descriptions. For example if you have an image called “tiger jumping” and an image called “lion jumping” then typing “jump” into the search box should hide the other posts and show just these 2.

We need both of these things to work together so if the word “jump” is searched and the lion filter is clicked, only the lion post will show.
Task 1


Go to codepen.io/andrushka/pen/rNdQmOd

Pick 4 animals

Go to pexels.com and get 4 pictures of each animal (16 total)

Create a HTML page containing a search input, 4 buttons (one for each animal), 1 more button labelled “Show All”

Give each button a class of “buttonFilter”

Add 16 containers with the animal images randomly spread out. Add a class that represents the animal class=”tiger”

Task 2


Add a second class to each container that is called “imageFilter”.

Add an attribute to each button animal =”tiger” (Show all, animal =”all”)

Add a variable const button = document.querySelectorAll(".buttonFilter");

const images = document.querySelectorAll(".imageFilter");

Task 3


Loop through each button in the button array.

Add an event listener for each button that looks for a click event

Grab the animal attribute with animal = this.getAttribute("animal");

Task 4


Loop through each item in the images array

If animal = all change all of the containers to display:block

If animal = “tiger” then if the container contains the class tiger display:block otherwise display:none

Task 5


Add a keyup event to the search box

The text entered should be used to filter based on the image alt attribute (or use the src attribute if you have no alts)

The selected filter button should also be taken into account

Task 6


Add CSS classes that show which filter is currently selected by adding a border to the clickable element.

Add some helper text above the images that says something like “showing animals that match the search “{searchString}” and the filter {filter}
