// **.spec.js identifies the test file
// this is important as npm cannot target jest otherwise
// test coverage now working 
// but mFunction functions are only 75% cover:  fix required


const { mFunction } = require('./mFunction');

console.log(mFunction);



 //

describe('arrayContaining', () => {

  const expectTitles = ['Lightyear', 'Brave', 'Mitchells vs the Machines', 'The Croods: A New Age', 'Moana']

  it('matches even though received contains additional elements', () => {
    try {
    expect(['Lightyear', 'Brave', 'Mitchells vs the Machines', 'The Croods: A New Age', 'Moana', 'Minions The Rise of Gru']).toEqual(expect.arrayContaining(expectTitles));
  
  } catch (err) {
  ('does not match as received does not contain expected elements', () => {
    expect([Number]).not.toEqual(expect.arrayContaining(expected));
    console.log("error", err);
  }); 
}});
});


// attempted using "test": "jest --detectOpenHandles" to isolate issue:
// only 75% cover for functions in mFunction.js 
// "asynchronous operations that weren't stopped in your tests"
// did not help - no further details in error message, revert to --coverage

test('should resolve to some value', () => {
  const p = Promise.resolve('some value');
  return expect(p).resolves.toBe('some value');
});

test('should reject to error', () => {
  const p = Promise.reject('error');
  return expect(p).rejects.toBe('error');
});

// new test are working BUT
// *** STILL HAVE ONLY 75% COVER (LINES 14-18 MISSED)
// DOES THIS MEAN THE TIMEOUTS ARE WHAT NEEDS COVER NOT THE PROMISE??