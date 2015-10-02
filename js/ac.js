var acjs = (function() {
    var searchField = document.getElementById('search-box');
    var activeWordIndex = 0;

    function acRequest(acTerm, callback) {

        var xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback(JSON.parse(xhttp.responseText));
            }
        };
        xhttp.open("GET", "/search/" + acTerm, true);
        xhttp.send();

    }

    function acCallback(array) {
        var listContainer = document.getElementById('autocomplete-suggestions');
        var growingList = "";
        var thisWord;
        for (var i = 0; i < array.length; i++) {
            thisWord = array[i];
            growingList += '<li class="suggestion">' + thisWord + '</li>';
        }
        listContainer.innerHTML = growingList;
        listContainer.firstChild.classList.add('active');
        activeWordIndex = 0;
    }

    searchField.addEventListener('keydown', function(e) {
        if (e.keyCode === 38 || e.keyCode === 40) {
            e.preventDefault();
        }
    });
    searchField.addEventListener('keyup', function(e) {
        var suggestionList = document.getElementsByClassName('suggestion');
        if (e.keyCode === 38 || e.keyCode === 40) {
            if (e.keyCode === 40 && activeWordIndex < suggestionList.length-1) {
                activeWordIndex++;
            }
            if (e.keyCode === 38 && activeWordIndex > 0) {
                activeWordIndex--;
            }
            for (var i = 0; i < suggestionList.length; i++) {
                if (i !== activeWordIndex) {
                    suggestionList[i].classList.remove("active");
                } else {
                    suggestionList[i].classList.add("active");
                }
            }
            activeWord = document.getElementsByClassName('active')[0];
            if (activeWord) {
                apiTrigger.defRequest(activeWord.textContent, function(data) {
                    document.getElementById('definition-container').innerHTML = '<p>' + data + '</p>';
                });
            }

        } else if (searchField.value.length > 2) {
            acRequest(searchField.value, acCallback);
        }
    });

}());
