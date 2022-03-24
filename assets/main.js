// 1. Use the id-selector to get your inputs' and the output element from the DOM
const inputOne = document.querySelector(`#one`);
const inputTwo = document.querySelector(`#two`);
const inputThree = document.querySelector(`#three`);
const inputFour = document.querySelector(`#four`);
const inputFive = document.querySelector(`#five`);
const inputSix = document.querySelector(`#six`);
const inputSeven = document.querySelector(`#seven`);
const inputEight = document.querySelector(`#eight`);
const inputNine = document.querySelector(`#nine`);
const inputTen = document.querySelector(`#ten`);

const output = document.querySelector(`.output`);
// 2. For each of the inputs, get the value (word) from them

// 3. Generate your template using the values from above and set the output element's value equal to it!
//HINT: You'll need a ton of code before doing anything in this function that's called in your index.html 😜
function generateTemplate() {
  let madlib = `${inputOne.value} is the main character of this story.
    He is very ${inputTwo.value} and ${inputThree.value}. While on a trip,
    ${inputOne.value} ${inputFour.value} and broke his arm. His arm hurt very
    ${inputSix.value}. He had to ${inputSeven.value} to the hospital because
    his car was out of gas. While on the way, ${inputOne.value} ${inputFive.value}
    and hurt his ${inputEight.value}. Because of this, his ${inputNine.value}
    had to carry him to the hospital. In the end, ${inputOne.value} had to eat
    ${inputTen.value} for the rest of his life because of his injuries.`
  console.log(madlib);
  output.innerHTML = madlib;

}

console.log(generateTemplate);
