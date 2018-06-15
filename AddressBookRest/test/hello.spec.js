const expect = require('chai').expect;

const sum = (a, b) => a + b;

describe('Hello', function() {

  describe('#sum()', function() {
    it('should return 3 when params are 1 and 2', function() {
      expect(sum(1, 2)).to.equals(3);
    });
  });

  describe('#setTimeout()', function() {
    it('should call cb in 100ms', function(done) {
      setTimeout(() => {
        expect(true).to.be.true;
        done();
      }, 100);
    });
  });

});
