var acjs = (function() {
  //get value from searchbar
  search_value = document.getElementById("search-box").value;
  //search_array = search_value.split("");

  

  function defRequest() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var result = xhttp.responseText;
      }
    };
    xhttp.open("GET", "/search/"+search_value , true);
    xhttp.send();

  }

  defRequest();

}());
