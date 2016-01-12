(function () {
    'use strict';
    var accordions, i;
  /* Using a function helps isolate each accordion from the others */
    function makeAccordion(accordion) {
        var targets, currentTarget;
        targets = accordion.querySelectorAll('.MyAccordion >  dt');
        function expand() {
            if (currentTarget) {
                currentTarget.classList.remove('expanded');
            }
            currentTarget = this.nextElementSibling;
            currentTarget.classList.add('expanded');
        }
        for (i = 0; i < targets.length; i += 1) {
            targets[i].addEventListener('click', expand, false);
        }

        accordion.classList.add('u-js');
    }
    /* Find all the accordions to enable */
    accordions = document.querySelectorAll('.MyAccordion');
    for (i = 0; i < accordions.length; i += 1) {
        makeAccordion(accordions[i]);
    }
    /* Load Ajax content */
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            document.getElementById("u-ajax").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "./ajax-info.txt", true);
    xhttp.send();
}());

