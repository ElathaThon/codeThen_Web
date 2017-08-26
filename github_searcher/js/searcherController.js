

//setup the search of github repositories


setupSearcher(".search.form", (sectionDiv) => {

    const searchTerm = document.querySelector("input").value;

    const url = 'https://api.github.com/search/repositories?q=' + searchTerm;

    displayResult(sectionDiv, "sending request with fetch...");

    fetch(url)
        .then(x => x.json()) // gets response as JSON object, so it does JSON.parse() for us
        .then(data => {
            console.log("AJAX request finished correctly :)");
            console.log(data);
            const result = generateList(data);
            displayResult(sectionDiv, result);
        })
        .catch(error => {
            console.log("AJAX request finished with an error :(");
            displayResult(sectionDiv, `There was an error: ${error}`);
        });

});


function generateList(data) {
    console.log(data);
    let html = "Found " + data.total_count +" repositories about " + searchTerm;

    for( let i = 0; i < data.length; i++) {
        let item = data[i];
        console.log(item);
        html += "<li>" + generateListElement(item) + "</li>";
    }

    return html;
}


function generateListElement(data) {
    return data.name + " - from user: " + data.owner.login
}


// Convenience functions
// https://github.com/fmaylinch/fmaylinch.github.io/blob/master/files/html/examples/example3/js/main.js

/**
 * Finds the element that has the given classSelector (we call it sectionContainer),
 * and configures the button inside so when it's clicked, the
 * sectionExample function will be called (with sectionContainer as an argument).
 */
function setupSearcher(classSelector, sectionExample) {

    var sectionContainer = document.querySelector(classSelector);

    sectionContainer.querySelector("button").onclick = function() {
        sectionExample(sectionContainer);
    };
}

/** Sets the resultText in an element with class "result" inside the sectionElement */
function displayResult(sectionElement, resultText) {
    console.log(resultText);
    sectionElement.querySelector(".result").textContent = resultText;
}