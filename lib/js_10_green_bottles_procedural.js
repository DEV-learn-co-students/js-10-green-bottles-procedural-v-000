var song = function(numberOfBottles){
  var string = '';


  while(numberOfBottles > 0){

    if (numberOfBottles > 2) {
      var bottle = 's';
      string += numberOfBottles + ' green bottle' + bottle + ' hanging on the wall\n' + numberOfBottles + ' green bottle' + bottle + ' hanging on the wall\nAnd if one green bottle should accidentally fall down\nThere will be ' + (numberOfBottles - 1) + ' green bottle' + bottle + ' hanging on the wall' + '\n' + '\n';
    } else if (numberOfBottles === 2) {
      var firstTwoVerses = 's';
      var bottle = '';
      string += numberOfBottles + ' green bottle' + firstTwoVerses + ' hanging on the wall\n' + numberOfBottles + ' green bottle' + firstTwoVerses + ' hanging on the wall\nAnd if one green bottle should accidentally fall down\nThere will be ' + (numberOfBottles - 1) + ' green bottle' + bottle + ' hanging on the wall' + '\n' + '\n';
    } else {
      var bottle = '';
      string += numberOfBottles + ' green bottle' + bottle + ' hanging on the wall\n' + numberOfBottles + ' green bottle' + bottle + ' hanging on the wall\nAnd if that green bottle should accidentally fall down\nThere will be ' + (numberOfBottles - 1) + ' green bottle' + bottle + ' hanging on the wall' + '\n';
    }

    numberOfBottles--;
  }
  return string;
};
