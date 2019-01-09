let expect = require("chai").expect;
const createCalculator = require('../07. Add Subtract');

describe("Check calculator task", function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
    it("should return 0 for get;", function () {
        let value = calc.get();
        expect(value).to.be.equal(0);
    });
    it("should return NaN after {add}", function() {
        calc.add(); let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return NaN after {subtract}", function() {
        calc.subtract(); let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return NaN after {add string}", function() {
        calc.add('kon'); let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return NaN after {subtract string}", function() {
        calc.subtract('kon'); let value = calc.get();
        expect(value).to.be.NaN;
    });
    it("should return 5 after {add 3; add 2}", function() {
        calc.add(3); calc.add(2); let value = calc.get();
        expect(value).to.be.equal(5);
    });
    it("should return -5 after {subtract(3); subtract(2)}", function() {
        calc.subtract(3); calc.subtract(2); let value = calc.get();
        expect(value).to.be.equal(-5);
    });
    it("should return 4.1 after {add(5.3); subtract(1.2)}", function() {
        calc.add(5.3); calc.subtract(1.2); let value = calc.get();
        expect(value).to.be.equal(4.1);
    });
    it("should return 2 after {add(10); subtract('7'); add('-2'); subtract(-1)}", function() {
        calc.add(10); calc.subtract('7'); calc.add('-2'); calc.subtract(-1); let value = calc.get();
        expect(value).to.be.equal(2);
    });
});