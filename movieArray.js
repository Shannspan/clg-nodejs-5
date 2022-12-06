// Iterate through movies list with setTimeout of 1 second enclosing

const forwardFilmList = [{"Lightyear": "Sci fi Action"}, {"Brave": "Historical drama"}, {"Moana": "Adventure"}];    

async function getMovies() {
    return forwardFilmList.reverse();

} 
// check reverse method is working
//console.log(getMovies);

function movieTimer() {
    return new Promise (resolve => {
    setTimeout(() => {
    resolve(getMovies());
    }, 1000);
})
}

// // async / await function
async function callMovies() {    
    console.log('Waiting');
    const oneSecWait = await movieTimer();
    console.log(oneSecWait);
}
callMovies();

// returns 'Waiting'
// then after 1 second
// array in reverse

//FIX REQUIRED: 1000MS TIMER IS WORKING BUT PRODUCES createMovies

async function createMovies() {
    return forwardFilmList.push({Mulan: 'Historical Action'});    
} 

function movieTimer2() {
    return new Promise (resolve => {
    setTimeout(() => {
    resolve(createMovies());
    }, 2000);
})
}

async function callMovies2() {       
    console.log('New movie coming');
    const twoSecNew = await Promise.all(movieTimer2((async() => {
    return await createMovies();   
})));
console.log(twoSecNew);
}
createMovies();

