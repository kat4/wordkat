var apiTrigger = (function() {

    function defRequest(searchterm, callback) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                callback(xhttp.responseText);

            }

        };
        xhttp.open("GET", "/worddef/" + searchterm, true);
        xhttp.send();

    }


    return{
        defRequest: defRequest
    };

})();
