// import array from movieArray.js

let movies = require("./movieArray");

// include process module fir argv use later
const process = require('process');

// timer 1 seconds

function resolveAfter1Sec() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 1000);
});
}

// timer 2 seconds

function resolveAfter2Sec() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
});
}

// Iterate through movieArray.js with setTimeout of 1 second enclosing

async function getMovies() {
    console.log("Reverse movie list will arrive in 1 seconds");
    // check timer is working by running time of 5000 to make more obvoius - yes
    await resolveAfter1Sec();
    // check reverse method is working for iteration - yes
    console.log(movies.reverse())
}
getMovies();

// create a new function that fetches a new argument and pushes to array

//let myArgv = process.argv.slice(2);

//////FIX REQUIRED: CLARIFY ARGUMENT OBJECT IN FUNCTION - I DON'T THINK ARGV VIA CLI IS GOING TO WORK AS PER MATHS BASED ASSIGNMENT

let newTitle = Title: 'Minions The Rise of Gru';

let newStoryline = "Storyline" "The untold story of one 12-year-old’s dream to become the world’s greatest supervillain. In the heart of the 1970s, amidst a flurry of feathered hair and flared jeans, Gru is growing up in the suburbs. A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them.";

const newMovie = newTitle + newStoryline;

console.log(movies.push(newMovie));


// async function createMovies() {
//     await resolveAfter2Sec();
//     console.log("Adding another movie to the list");
//     // check timer is working by running time of 5000 to make more obvoius - yes

//     // check reverse method is working for iteration - yes
//     console.log(movies.reverse().push((`${Title: 'string', Storyline: 'String'}`)))
// }
// createMovies();



// async function initMovies() {
//     let result = null;
//     //error handling/unit testing try catch block
//     try {
//         result = await Promise.all(
//             createMovies(); // complete first
//             getMovies(); // complete after createMovies
//         )
//         console.log('Success: ', result);
//     } catch (err) {
//         console.log('Fail : ', result, err);
//     }
// }

// initMovies();



