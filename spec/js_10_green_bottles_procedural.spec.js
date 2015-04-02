var song = require('./lib/js_10_green_bottles_procedural');

describe('song', function() {

  it('handles 1 bottle', function() {
    var expected = "1 green bottle hanging on the wall\n1 green bottle hanging on the wall\nAnd if that one green bottle should accidently fall down\nThere will be 0 green bottle hanging on the wall" + '\n';
    expect(song(1)).toEqual(expected);
  });

  it('handles 2 bottles', function() {
  var expected = "2 green bottles hanging on the wall\n2 green bottles hanging on the wall\nAnd if one green bottle should accidentally fall down\nThere will be 1 green bottle hanging on the wall" + '\n';
  expect(song(2)).toEqual(expected);
  });

  it('handles an arbitrary number of bottles', function() {
    var expected = "3 green bottles hanging on the wall\n3 green bottles hanging on the wall.\nAnd if one green bottle should accidently fall down\nThere will be 2 green bottles hanging on the wall\n" + '\n' + "2 green bottles hanging on the wall\n2 green bottles hanging on the wall\nAnd if one green bottle should accidentally fall down\nThere will be 1 green bottle hanging on the wall\n" + '\n' + "1 green bottle hanging on the wall\n1 green bottle hanging on the wall\nAnd if that one green bottle should accidently fall down\nThere will be 0 green bottle hanging on the wall" + '\n';
    expect(song.sing(3)).toEqual(expected);
  });

  it('sings the entire nursery rhyme', function() {
    var expected = "10 green bottles hanging on the wall\n10 green bottles hanging on the wall.\nAnd if one green bottle should accidently fall down\nThere will be 9 green bottles hanging on the wall\n" + '\n' + "9 green bottles hanging on the wall\n9 green bottles hanging on the wall.\nAnd if one green bottle should accidently fall down\nThere will be 8 green bottles hanging on the wall\n" + '\n' + "8 green bottles hanging on the wall\n8 green bottles hanging on the wall.\nAnd if one green bottle should accidently fall down\nThere will be 7 green bottles hanging on the wall\n" + '\n' + "7 green bottles hanging on the wall\n7 green bottles hanging on the wall.\nAnd if one green bottle should accidently fall down\nThere will be 6 green bottles hanging on the wall\n" + '\n' + "6 green bottles hanging on the wall\n6 green bottles hanging on the wall.\nAnd if one green bottle should accidently fall down\nThere will be 5 green bottles hanging on the wall\n" + '\n' + "5 green bottles hanging on the wall\n5 green bottles hanging on the wall.\nAnd if one green bottle should accidently fall down\nThere will be 4 green bottles hanging on the wall\n" + '\n' + "4 green bottles hanging on the wall\n4 green bottles hanging on the wall.\nAnd if one green bottle should accidently fall down\nThere will be 3 green bottles hanging on the wall\n" + '\n' + "3 green bottles hanging on the wall\n3 green bottles hanging on the wall.\nAnd if one green bottle should accidently fall down\nThere will be 2 green bottles hanging on the wall\n" + '\n' + "2 green bottles hanging on the wall\n2 green bottles hanging on the wall\nAnd if one green bottle should accidentally fall down\nThere will be 1 green bottle hanging on the wall\n" + '\n' + "1 green bottle hanging on the wall\n1 green bottle hanging on the wall\nAnd if that one green bottle should accidently fall down\nThere will be 0 green bottle hanging on the wall" + '\n';
    expect(song.sing(3)).toEqual(expected);
  });
});
