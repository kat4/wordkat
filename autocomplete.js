var acjs = (function() {

  var filter_word = function(word_content, word_array) {
      return word_array.filter(function(word) {
          if (word.slice(0, word_content.length) === word_content) {
            return true;
          }
      });
  };

  return {
    filter_word: filter_word

  };


  //when add additional letter added return a request using the previous 3 letters and a fourth
}());

module.exports = acjs;
