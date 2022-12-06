// // Iterate through movies list with setTimeout of 1 second enclosing

const forwardFilmList = [{"Lightyear": "Sci fi Action"}, {"Brave": "Historical drama"}, {"Moana": "Adventure"}];    

// async function getMovies() {
//     return forwardFilmList.reverse();
// }

// // check reverse method is working
// //console.log(getMovies);

// function movieTimer() {
//     return new Promise (resolve => {
//     setTimeout(() => {
//     resolve(getMovies());
//     }, 1000);
// })
// }

// // // async / await function
// async function callMovies() {    
//     console.log('Waiting');
//     const oneSecWait = await movieTimer();
//     console.log(oneSecWait);
// }
// callMovies();


// returns 'Waiting'
// then after 1 second
// array in reverse


//FIX REQUIRED FOR SECOND SET OF FUNCTIONS AS PUSH NOT APPEARING TO WORK: 
//$ node movieArray.js 
// Four animated films
// 4
// New movie coming


let newFilmList = forwardFilmList.push({Mulan: 'Historical Action'});    




function createMovies() {

    return new Promise (resolve => {        
    setTimeout(() => {
    resolve ("New movie coming");
    console.log(newFilmList);
    
    }, 2000);
});
}



async function callMovies2() {       
    console.log('Four animated films');
    const twoSecNew = await createMovies();
    console.log(twoSecNew);   
};

callMovies2();

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



