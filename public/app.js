"use strict";
const users = [];
const userForm = document.getElementById("userForm");
const userCards = document.getElementById("userCards");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = document.getElementById("firstName")
        .value;
    const lastName = document.getElementById("lastName")
        .value;
    const age = parseInt(document.getElementById("age").value);
    const from = document.getElementById("from").value;
    const job = document.getElementById("job").value;
    const newUser = {
        firstName,
        lastName,
        age,
        from,
        job,
    };
    users.push(newUser);
    displayUsers();
    userForm.reset();
});
function displayUsers() {
    userCards.innerHTML = "";
    users.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.classList.add("card");
        userCard.innerHTML = `
      <h2>${user.firstName} ${user.lastName}</h2>
      <p>Age: ${user.age}</p>
      <p>From: ${user.from}</p>
      <p>Job: ${user.job}</p>
    `;
        userCards.appendChild(userCard);
    });
}
