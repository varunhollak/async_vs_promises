
const asyncBtn = document.getElementById("asyncBtn");
const promiseBtn = document.getElementById("promiseBtn");
const loader = document.getElementById("loader");
const userCard = document.getElementById("userCard");

const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const phoneField = document.getElementById("phone");
const websiteField = document.getElementById("website");



function showLoader() {
    loader.classList.remove("hidden");   // Show loader
    userCard.classList.add("hidden");    // Hide old user data
}



function hideLoader() {
    loader.classList.add("hidden");      // Hide loader
}



function displayUser(user) {
    nameField.textContent = user.name;
    emailField.textContent = "Email: " + user.email;
    phoneField.textContent = "Phone: " + user.phone;
    websiteField.textContent = "Website: " + user.website;

    userCard.classList.remove("hidden"); // Show user card
}



promiseBtn.addEventListener("click", function () {

    console.log("Promise method started");

    showLoader();

    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(function(response) {
            console.log("Response received");
            return response.json();
        })
        .then(function(data) {
            console.log("Data converted to JSON");
            displayUser(data);
            hideLoader();
        })
        .catch(function(error) {
            console.log("Error:", error);
            hideLoader();
        });

    console.log("Promise method ended");

});


asyncBtn.addEventListener("click", async function () {

    console.log("Async method started");

    showLoader();

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        console.log("Response received");
        console.log("Hello World");

        const data = await response.json();
        console.log("Data converted to JSON");

        displayUser(data);
    } catch (error) {
        console.log("Error:", error);
    }

    hideLoader();

    console.log("Async method ended");

});