const form = document.getElementById("contact-form");
var name;
var number;
var address;
var message;
var email;

form.addEventListener("submit", (e) => {
  const data = {
    userName: document.getElementById("name").value,
    userNumber: document.getElementById("number").value,
    userAddress: document.getElementById("address").value,
    userMessage: document.getElementById("message").value,
    userEmail: document.getElementById("email").value,
  };
  e.preventDefault();
  console.log("Name: " + data.userName);
  console.log("Number: " + data.userNumber);
  console.log("Address: " + data.userAddress);
  console.log("Message: " + data.userMessage);
  console.log("Email: " + data.userEmail);
});
const checkbox = document.getElementById("check");
const nav = document.querySelector("nav ul");

checkbox.addEventListener("change", () => {
    nav.classList.toggle("show");
});