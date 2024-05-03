console.log("Hello from JavaScript!");

// * Recap Iterations
const beatles = ["paul", "john", "ringo", "george"];
const students = ["Marco", "Christian", "Julian", "Sonia", "Mahdi", "Josh", "Eduardo", "Jeremy", "Alexander", "Franziska", "Remi", "Precious", "Basria", "Clémence", "Luise", "Roberto", "Jeremy", "Brian", "Alina", "Bruno", "Tuo", "Sachini", "Alberto"];
const berlinPlaces = ["Checkpoint Charlie (Le Wagon)", "Potsdam", "Admiralsbrücke", "Liebnitzsee", "Treptower Park", "Körnerpark", "Tempelhofer Feld"];

students.forEach((student) => {
  // console.log(student);
  // let counter = 0;
  // counter += 1;
  // console.log(counter);
});

// * Get Button
// const button = document.querySelector('.btn')
// const buttons = document.querySelectorAll('.btn')
// const specificButton = document.getElementById('blueButton')

// * Generating a List
// let listItems = '';

// berlinPlaces.forEach((place) => {
//   // console.log(`<li>${place}</li>`);
//   listItems += `<li>${place}</li>`
// });

// const list = `<ul>${listItems}</ul>`;

// console.log(list);
// document.body.insertAdjacentHTML('beforeend', list);

// * Doing Stuff in the DOM

// const elements = document.querySelectorAll("li");

// elements.forEach((element) => {
//  element.innerHTML += '📍';
// });

// ul.style.listStyleType = "upper-roman";

// * DATASET
// When coding JS,
// when your application is jumping from function to function,
// it becomes difficult to access certain data,
// for example the no. of likes a certain post has,
// and it eventually becomes necessary to store data inside elements on the DOM.
// posts, likes, scores, 

// const listOfStudents = document.querySelectorAll('.student');

// listOfStudents.forEach((member) => {
//   member.innerHTML += `: ${member.dataset.nickname}`;
// });


// ? EVENTS

// * Add An EventListener to Images
document.querySelectorAll("img").forEach((img) => {
 img.addEventListener("click", (event) => {
  // console.log(event);
  // Element the eL has been attached to
  // console.log(event.currentTarget);
  // Event occured on
  // console.log(event.target);
   // event.currentTarget.classList.toggle("img-circle");
 });
});
