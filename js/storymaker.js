// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors

const noun1El = document.querySelector("#noun1");
const verbEl = document.querySelector("#verb");
const adjectiveEl = document.querySelector("#adjective");
const noun2El = document.querySelector("#noun2");
const settingEl = document.querySelector("#setting");
const bodyEl = document.querySelector("body");

let finalStory = [null, null, null, null, null];

// Constants for p tag to display query selectors

const choosenNoun1El = document.querySelector("#choosenNoun1");
const choosenVerbEl = document.querySelector("#choosenVerb");
const choosenAdjectiveEl = document.querySelector("#choosenAdjective");
const choosenNoun2El = document.querySelector("#choosenNoun2");
const choosenSettingEl = document.querySelector("#choosenSetting");

// Constants for final buttons and p tags

const playbackEl = document.querySelector("#playback");
const randomEl = document.querySelector("#random");
const storyEl = document.querySelector("#story");
const resetBtn = document.querySelector("#reset");
const showID = document.querySelector("#showID");

// Variables for pre-defined arrays

let noun1Array = ["The turkey", "Mom", "Dad", "The dog", "My Teacher", "The Elephant", "The cat"];
let verbArray = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let adjectiveArray = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let noun2Array = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let settingArray = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];

// Variables for count to grab array elements

let word1 = 0;
let word2 = 0;
let word3 = 0;
let word4 = 0;
let word5 = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    bodyEl.style.backgroundColor = "#BE5A38";

    // variable to get array element and displaying it
    choosenNoun1El.textContent = "";
    choosenNoun1El.textContent += noun1Array[word1];

    // Concatate to final story: 
    finalStory[0] = noun1Array[word1];

    // if-else to change count setting
    if (word1 > 5) {
        word1 = 0;
    } else {
        word1++;
    }

}

function verb_on_click() {
    bodyEl.style.backgroundColor = "#77BA99";

    choosenVerbEl.textContent = "";
    choosenVerbEl.textContent += verbArray[word2];

    // Concatate to final story: 
    finalStory[1] = verbArray[word2];

    // if-else to change count setting
    if (word2 > 4) {
        word2 = 0;
    } else {
        word2++;
    }
}

function adjective_on_click() {
    bodyEl.style.backgroundColor = "#2E4052";

    choosenAdjectiveEl.textContent = "";
    choosenAdjectiveEl.textContent += adjectiveArray[word3];

    // Concatate to final story: 
    finalStory[2] = adjectiveArray[word3];

    // if-else to change count setting
    if (word3 > 4) {
        word3 = 0;
    } else {
        word3++;
    }

}

function noun2_on_click() {

    bodyEl.style.backgroundColor = "#34113F";

    // variable to get array element and displaying it

    choosenNoun2El.textContent = "";
    choosenNoun2El.textContent += noun2Array[word4];

    // Concatate to final story: 
    finalStory[3] = noun2Array[word4];

    // if-else to change count setting
    if (word4 > 5) {
        word4 = 0;
    } else {
        word4++;
    }
}

function setting_on_click() {
    bodyEl.style.backgroundColor = "#7209B7";

    choosenSettingEl.textContent = "";
    choosenSettingEl.textContent += settingArray[word5];

    // Concatate to final story: 
    // finalStory
    finalStory[4] = settingArray[word5];

    // if-else to change count setting
    if (word5 > 4) {
        word5 = 0;
    } else {
        word5++;
    }
}

// concatenate the user story and display
function playback_on_click() {
    if (!finalStory.includes(null)) {
        bodyEl.style.backgroundColor = "#B20D30";
        storyEl.textContent = "";
        storyEl.textContent = finalStory.join(" ");
    } else {
        alert("Make sure to select all the buttons!");
    }
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {

    bodyEl.style.backgroundColor = "#386641";

    // define length for each variables since they dont all have the same length
    let arrayLen = [7, 6, 6, 7, 6];
    // store a random number based on each array length
    let randomArr = [];
    // store the final random story
    let randomStory = "";

    // generate each random number
    arrayLen.forEach(element => {
        let random = Math.floor(Math.random() * element);
        console.log(random);
        randomArr.push(random);
    });

    // concatanate the random words with a space to create the final story 
    randomStory += noun1Array[randomArr[0]] + " ";
    randomStory += verbArray[randomArr[1]] + " ";
    randomStory += adjectiveArray[randomArr[2]] + " ";
    randomStory += noun2Array[randomArr[3]] + " ";
    randomStory += settingArray[randomArr[4]] + " ";

    storyEl.textContent = randomStory;
}

function reset() {
    bodyEl.style.backgroundColor = "#292929";
    choosenNoun1El.textContent = "";
    choosenVerbEl.textContent = "";
    choosenAdjectiveEl.textContent = "";
    choosenNoun2El.textContent = "";
    choosenSettingEl.textContent = "";
    storyEl.textContent = "";

    finalStory = [null, null, null, null, null];
}

function show_on_click() {
    bodyEl.style.backgroundColor = "#0B0033";
    const studentID = document.querySelector("#studentId");
    studentID.classList.toggle("hidden");
}

/* Event Listeners
-------------------------------------------------- */
// show elements for each button
noun1El.addEventListener("click", noun1_on_click);
verbEl.addEventListener("click", verb_on_click);
adjectiveEl.addEventListener("click", adjective_on_click);
noun2El.addEventListener("click", noun2_on_click);
settingEl.addEventListener("click", setting_on_click);

// function buttons
playbackEl.addEventListener("click", playback_on_click);
randomEl.addEventListener("click", random_on_click);
resetBtn.addEventListener("click", reset);

// show studen info button
showID.addEventListener("click", show_on_click);