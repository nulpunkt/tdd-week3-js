var fs = require('fs');

class FileReader {
  constructor(filename) {
    this.filename = filename;
  }

	readLines() {
    return fs.readFileSync(this.filename).toString().trim().split("\n");
	}
}

module.exports.FileReader = FileReader;
