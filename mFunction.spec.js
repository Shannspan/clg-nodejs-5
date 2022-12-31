// **.spec.js identifies the test file
// this is important as npm cannot target jest otherwise
// test coverage now working but failing - fix required


const { mFunction } = require('./mFunction');

console.log(mFunction);


 //

describe('arrayContaining', () => {

  const expected = ['Lightyear', 'Brave', 'Mitchells vs the Machines', 'The Croods: A New Age', 'Moana']

  it('matches even though received contains additional elements', () => {
    try {

    expect(['Lightyear', 'Brave', 'Mitchells vs the Machines', 'The Croods: A New Age', 'Moana', 'Minions The Rise of Gru']).toEqual(expect.arrayContaining(expected))
  } catch (err) {

  it('does not match as received does not contain expected elements', () => {

    expect(['Yearlight', 'Machines vs the Mitchells']).not.toEqual(expect.arrayContaining(expected));
  });
}});
});

// attempted using "test": "jest --detectOpenHandles" to isolate issue:
// only 75% cover for functions in mFunction.js 
// "asynchronous operations that weren't stopped in your tests"
// did not help - no further details in error message, revert to --coverage