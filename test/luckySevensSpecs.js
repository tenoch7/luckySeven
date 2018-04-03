var expect    = require("chai").expect;


describe("luckySevens", function() {
  describe("Adding four to an integer", function() {
    it("should return the number plus four", function() {
      var value = (255 + 4);
      
      expect(value).to.equal(259);
      
    });
  });

  describe("Adding four to a string", function() {
    it("should return a string", function() {
      var value = ("255" + 4);
      
      expect(value).to.equal("2554");
      
    });
  });
  
});