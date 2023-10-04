function linearSearch(searchTerm, arr) {

  for (i=0; i<arr.length; i++){
      if (searchTerm === arr[i]) {
        return i;
      } 
  }
  return undefined;
}

function globalLinearSearch(searchTerm, arr) {
  const myLetters = [];
  for (i=0; i<arr.length; i++) {
    if (searchTerm === arr[i]) {
      myLetters.push(i)
    }
  }

  return myLetters;
}

module.exports = { linearSearch, globalLinearSearch };
