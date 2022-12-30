const { mFunction } = require('./mFunction');
console.log(mFunction);

test('The movie list has "Minions The Rise of Gru" on it', () => {
  expect(mFunction).toContain("Brave");
  expect(new Set(mFunction)).toContain("Minions The Rise of Gru");
});
