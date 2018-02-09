const fu = require('./stringadder');

var fr, sa;

beforeEach(() => {
  fr = {readLines: jest.fn()};
  sa = new fu.StringAdder(fr);
});

test('we can add numbers', () => {
  fr.readLines.mockReturnValue(['1 2 3']);
  expect(sa.addNumbers()).toEqual([6]);
});

