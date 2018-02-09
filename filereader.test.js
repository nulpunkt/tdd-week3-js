const fr = require('./filereader');

var filereader;

beforeEach(() => {
  filereader = new fr.FileReader('./afile.txt');
});

test('we can read from a file', () => {
	expect(filereader.readLines()).toEqual(['stuff']);
});
