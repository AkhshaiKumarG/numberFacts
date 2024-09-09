let userInput = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinner = document.getElementById("spinner");



function entering(event) {
    if (event.key === "Enter") {
        if (userInput.value === "") {
            alert("Enter a number");
        } else {
            let url = "https://apis.ccbp.in/numbers-fact?number=" + userInput.value;
            let options = {
                method: "GET"
            }
            spinner.classList.remove("d-none");
            factEl.classList.add("d-none");
            fetch(url, options)
                .then(function(response) {
                    return response.json();
                })

                .then(function(jsondata) {
                    // let facts = fact.value;
                    let {
                        fact
                    } = jsondata;
                    factEl.textContent = fact;
                    spinner.classList.add("d-none");
                    factEl.classList.remove("d-none");

                })
        }
    }
}

userInput.addEventListener("keyup", entering);
