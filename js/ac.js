var acjs = (function() {
  //get value from searchbar
  search_value = document.getElementById("search-box").value;
  search_array = search_value.split("");

  // if key press and key press content > == 3 then call filter_word

  //get first 3 letters of string typed in box and send request, put that into array.
  var filter_word = function(word_content, word_array) {
      return word_array.filter(function(word) {
          if (word.slice(0, word_content.length) == word_content) {
            return true;
          }
      });
  };

  return {
    filter_word: filter_word

  };


  //when add additional letter added return a request using the previous 3 letters and a fourth
}());

//module.exports = acjs;
