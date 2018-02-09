function add(a, b) {
    return a + b;
}

class StringAdder {
  constructor(filereader) {
    this.filereader = filereader;
  }

  parseAndSum(line) {
  }
  addNumbers() {
    let lines = this.filereader.readLines();
    let intLines = lines.map((line) => line.split(' ').map((x) => parseInt(x)).reduce(add));
		return intLines;
  }
}

module.exports.StringAdder = StringAdder;
