var acServerside = (function() {

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

}());

module.exports = acServerside;
