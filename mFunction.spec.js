// **.spec.js identifies the test file
// this is important as npm cannot target jest otherwise
// test coverage now working but failing - fix required


const { mFunction } = require('./mFunction');

console.log(mFunction);

function testMovies() {
  expect(mFunction).toContain(index, String);
  expect(new Set(mFunction)).toContain(index, String);
} 
  try {let result = testMovies('Correct array format');
  console.log(result);
} catch (err) {
  console.log(err.message);
};

function expect(mFunction: any) {
  throw new Error("Function not implemented.");
}
//'The movie list has "Minions The Rise of Gru" on it'