const firstName = document.getElementById("Input-FristName");
const lastName = document.getElementById("Input-LastName");
const email = document.getElementById("Input-Email-Register");
const pwd = document.getElementById("Input-Password-Register");
const userName = document.getElementById("Input-UserName-Register");

/* 
Checker for if we have a valid email, passes and listens for response from server 
*/
email.addEventListener("input", function (event) {
  event.preventDefault();
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});
/*
Registration form checking.  Checks for valid inputs.
If inputs are good, we pass data to server, and wait for valid response
*/
async function register(event) {
  event.preventDefault();

  if (firstName.value.length === 0 || lastName.value.length === 0) {
    alert("First Name and Last Name cannot be null");
    return;
  }
  if (userName.value.length === 0) {
    alert("User Name cannot be null");
    return;
  }
  if (!email.validity.valid || email.value.length === 0) {
    alert("Please input a valid email");
    return;
  }
  if (pwd.value.length < 6) {
    alert("Password should not less than 6 characters");
    return;
  }

  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    userName: userName.value,
    email: email.value,
    pwd: pwd.value,
  };
  const options = {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  const rawData = await fetch("/register", options);
  if (rawData.status === 200) {
    window.location.assign("/logIn.html");
  } else if (rawData.status === 409){
    const res = await rawData.json();
    alert(res.register);
  } else {
    alert(res.err, " please try again");
  }
}