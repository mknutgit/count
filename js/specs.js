describe("count", function() {
  it("adds 'ay' to the end of a word that starts with an a", function() {
    expect(count(20, 2)).to.eql([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
  });
});
