var expect = chai.expect;

describe("timeConversion", function() {
  it('should return the number 3 when given the string "00:00:03"', function() {
    var str = "00:00:03";

    var result = timeConversion(str);

    expect(result).to.eql(3);
  });

  it('should return the number 61 when given the string "00:01:01"', function() {
    var str = "00:01:01";

    var result = timeConversion(str);

    expect(result).to.eql(8);
  });

  it("should return the number 0 when given an empty string.", function() {
    var str = "";

    var result = timeConversion(str);

    expect(result).to.eql(0);
  });

  it('Should return the number 3662 when given the string "01:01:02"', () => {
      var str = "01:01:02";

      var result = timeConversion(str);
      
      expect(result).to.eql(3662);
  })
});