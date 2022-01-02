// OPEN THE CONSOLE BELOW TO SEE THE JAVASCRIPT RUNNING

// find out what time it is

var currenttime = new Date();
var currenthour = currenttime.getHours();

console.log(currenthour);

// do a conditional

var emailmessage = "You are <strong>OK</strong> to email me now";

if (currenthour < 9 || currenthour > 22) {
  emailmessage = "I am asleep, sorry!"
}

var getheading = document.querySelector(".contact-me h2");
console.log(getheading);
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message">' + emailmessage + "</p>"
);

// For extra credit, you might now think about...
// using getTimezoneOffset(); to see if the user is in the same timezone as you, and modify the message accordingly?






//<p id="demo"></p>


//<h4 id="demo3"></h3>
//<!--<h2 id="demo2"> you</h3>-->
//<!--<div class="container-content">-->


//<script>



//<p id="demo"></p>
//</script>
// using get element id to find the the setfull year of date month year and GMT region




    // expected output: true

    
  

//let offset = new Date().getTimezoneOffset();
//console.log(offset);
// Montag
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
//
// or using setInterval to check every so often what the time is for the user, if they've been on your site for an hour or so?

// 
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

// For extra credit, you might now think about...
// using getTimezoneOffset(); to see if the user is in the same timezone as you, and modify the message accordingly?
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset
//
// or using setInterval to check every so often what the time is for the user, if they've been on your site for an hour or so?
// 
// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval



// This code has so far been tested in Firefox, Chrome and Edge on a Mac.

// The code creates a button which when clicked adds or removes a class called 'js-modify-page' to the <html> tag, allowing you to style your page differently when the button is 'off' or 'on'.

// So we have HTML, CSS and JavaScript working together - all three languages!

// find the <span id="switch">

var findLocation = document.getElementById("switch");

// create a button in code

var button = document.createElement("button");
button.setAttribute("class", "js-make-something-happen"); // add a class we can use to style the button in CSS
button.setAttribute("id", "make-something-happen"); // add an ID to listen out for clicks on the button
button.textContent = "Change the page"; // add the text for the button

// add this created button to our HTML at the place we've saved in the 'findLocation' variable

findLocation.append(button); // add the button to the HTML

// point JavaScript at the button we have just added and save the button location to do things with later

var listenForInteraction = document.getElementById("make-something-happen");

// This changePage function runs whenever the button is clicked on - you can see where it's being 'called' in line 34 and 35 below.

function changePage() {
  // 'toggle' means swop between adding and removing the class from the class list for the HTML element. You will be able to see this happening in the web developer tools.
  document.documentElement.classList.toggle("js-modify-page");
}

// create a click event on our new button that runs a function whenever the button is clicked

listenForInteraction.addEventListener("click", changePage);


//Display an time within an relapse interval
// program to display time every 5 seconds







    



    


