// import array from mArray.js

let movies = require("./mArray");

let promise = Promise.resolve();

// create getMovies function to iterate through array
// enclose loop in 1 second timeout (1000 milliseconds)
// usinf forEach to achieve

const getMovies = () => {
    movies.forEach(function (movie, index) {
        promise = promise.then(function () {
            console.log(movie.Title);
            return new Promise(function (resolve) {
                setTimeout(resolve, 1000);
                console.log(movie.Storyline);
            });

        });
    });

};
// test getMovies() - yes working
//getMovies();


// create createMovies function to fetch argument (movie)
// then push to array
// also contains a promise with 2 second timeout

let createMovies = (movieTitle, movieStoryline) => {
    promise = promise.then(function () {  
            movies.push({
            Title: movieTitle,
            Storyline: movieStoryline,
        });             
        return new Promise(function (resolve) {
            setTimeout(resolve, 2000);
            console.log(`Your new movie has been added`);           
        });
        
    });
};

// create init function to call 
// getMovies() so that it only runs after
// createMovies() is done
// using async await to achieve this

let initMovies = async(newTitle, newStoryline) => {
    await createMovies(newTitle, newStoryline);
    getMovies();
};

initMovies("Minions The Rise of Gru", "The untold story of one 12-year-old’s dream to become the world’s greatest supervillain. In the heart of the 1970s, amidst a flurry of feathered hair and flared jeans, Gru is growing up in the suburbs. A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them.");

