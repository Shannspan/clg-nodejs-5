// Iterate through movies list with setTimeout of 1 second enclosing

// must use promise.all to resolve array duration 
// because promise.all aggregates all results

async function getMovies(text) {
    // toupperCase is an inbuilt function
    return text.toUpperCase();
}
// async / await function
async function callFunction() {
    const lowerCaseArray = ["Lightyear", "Raya and the Lost Dragon", "Mitchell's vs. the Machines", "Brave"];
    // .map creates a copy of the array to make new array
    // await promise.all is required or when you call the callFunction
    // your return will be promise pending instead of desired array
    const upperCaseArray = await Promise.all(lowerCaseArray.map( async (movies) => {
        return await getMovies(movies);
    }));
    console.log(upperCaseArray);
}

callFunction();

// in bash terminal 
//$ node movieArray.js 
// returns
// [
//   'LIGHTYEAR',
//   'RAYA AND THE LOST DRAGON',
//   "MITCHELL'S VS. THE MACHINES",
//   'BRAVE'
// ]