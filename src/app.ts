interface User {
  firstName: string;
  lastName: string;
  age: number;
  from: string;
  job: string;
}

const users: User[] = [];

const userForm = document.getElementById("userForm") as HTMLFormElement;
const userCards = document.getElementById("userCards") as HTMLDivElement;

userForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstName = (document.getElementById("firstName") as HTMLInputElement)
    .value;
  const lastName = (document.getElementById("lastName") as HTMLInputElement)
    .value;
  const age = parseInt(
    (document.getElementById("age") as HTMLInputElement).value
  );
  const from = (document.getElementById("from") as HTMLInputElement).value;
  const job = (document.getElementById("job") as HTMLInputElement).value;

  const newUser: User = {
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
