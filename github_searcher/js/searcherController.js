

//setup the search of github repositories






// Convenience functions
// https://github.com/fmaylinch/fmaylinch.github.io/blob/master/files/html/examples/example3/js/main.js

/**
 * Finds the element that has the given classSelector (we call it sectionContainer),
 * and configures the button inside so when it's clicked, the
 * sectionExample function will be called (with sectionContainer as an argument).
 */
function setupExample(classSelector, sectionExample) {

    var sectionContainer = document.querySelector(classSelector);

    // querySelector() can be used on any element to look for elements inside
    // https://developer.mozilla.org/en/docs/Web/API/Element/querySelector
    //
    // the jQuery find() method is similar
    // https://api.jquery.com/find/

    sectionContainer.querySelector("button").onclick = function() {
        sectionExample(sectionContainer);
    };
}

/** Sets the resultText in an element with class "result" inside the sectionElement */
function displayResult(sectionElement, resultText) {
    console.log(resultText);
    sectionElement.querySelector(".result").textContent = resultText;
}