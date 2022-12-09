// Iterate through movies list with setTimeout of 1 second enclosing

async function getMovies() {
    await setTimeout(getMovies, 1000),
    console.log(forwardFilmList.reverse())
}
getMovies();
// // check reverse method is working


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


let newFilmList = forwardFilmList.push({"Film": "Mulan", "Genre": "Historical Action"});    
console.log(newFilmList);

// IDEAS FOR FIX START:
// REDO ARRAY FORMAT TO BE TITLE: 'TITLE', GENRE: 'GENRE' done
// RESEARCH .PUSH & WHY NOT WORKING
// IS EVENT OR EVENTEMMITTER MORE APPROPRIATE?
// SEPARATE FUNCTIONS TO INDIVIDUAL PAGES done
// 



function createMovies() {

    return new Promise (resolve => {        
    setTimeout(() => {
    resolve ("New movie coming");
   
    
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



