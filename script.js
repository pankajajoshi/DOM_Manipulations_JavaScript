let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
  randomQuote();
  
  
  // Do all of your work inside the document.addEventListener  

  // Part 1 
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element.
  // Remember there are a couple of ways to query id. Change the text of the title to something shorter.
   var Dcontainer1 =document.querySelector('#main-title');
   Dcontainer1.textContent = 'Race Action by DOM-Torreto';

  // Part 2
  //Select the bodyand change the background-color to a new color of your choice.
  document.body.style.backgroundColor = 'lightblue';

  // Part 3
  //Select DOM's Favorite Things list and remove the last list item.
  var favlist=document.querySelector('#favorite-things');
  favlist.removeChild(favlist.lastElementChild);
  // Part 4
  //Select all .special-title class elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements
  var splTitle=document.querySelectorAll('.special-title');
  splTitle.forEach(element => {
  element.style.fontSize ='2rem';
  });

  // Part 5
  //Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  const pastRList = document.querySelector('#past-races');
const chicagoRace = pastRList.querySelector('li:nth-child(4)');
pastRList.removeChild(chicagoRace);
  // Part 6
  //Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
  var newCity ="Spain"
  const newLiItem = document.createElement('li');
  newLiItem.textContent = newCity;

  pastRList.appendChild(newLiItem);

  // Part 7
  // Create a new .blog-postcorresponding to the new city added in Part 6. 
  // You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. 
  // Think about what order you want to create the elements, and what order you want to append them in.
  const newBlogPost = document.createElement('div');
newBlogPost.classList.add('.blog-post');

// Create the heading for the blog post
const newHeading = document.createElement('h2');
newHeading.textContent = `Racing Exploration at ${newCity}`;

// Create the content paragraph for the blog post
const newParagraphtext = document.createElement('p');
newParagraphtext.textContent = `During my visit to ${newCity}, I explored local culture and amazing food.`;

// Append the elements in the desired order
newBlogPost.appendChild(newHeading);
newBlogPost.appendChild(newParagraphtext);

// Insert the new blog post before the first blog post in the main section
const nextBlogPost = document.querySelector('.blog-post');
const mainContent = document.querySelector('.main');
mainContent.insertBefore(newBlogPost, nextBlogPost);

  // Part 8
  //When you reload the page, the script.jsfile loads a random DOM quote. Let's play with the included function:
  
  const getRandomColor = function() {
    const colors = ['red', 'blue', 'green', 'orange', 'purple'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.querySelector('#quote-of-the-day').style.color= colors[randomIndex];
  };
  getRandomColor();
  // Part 9
// Select all .blog-postclass elements. Iterate through the list of .blog-post class elements and apply two event handlers to each node. 
//The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.
// The mouseouthandler should toggle the class .purple
// The mouseenterhandler should toggle the class .red
// Test it out!

// Hint:

// Remember the document node property .classListand the document node method .toggle().
const allPost =document.querySelectorAll('.blog-post');
//

allPost.forEach(function(manyPost) {
  console.log(allPost);
  manyPost.addEventListener('mouseout', function() {
    manyPost.classList.toggle("purple");
    
  });

  manyPost.addEventListener('mouseenter', function() {
    manyPost.classList.toggle("red");
   
  });


});
});
