/*
checks for valid form inputs.  If valid, we pass to server
and wait for response.
*/
async function userLogin(event) {
  event.preventDefault();
  const email = document.getElementById("Input-Email-Login");
  const pwd = document.getElementById("Input-Password-Login");

  const data = {
    email: email.value,
    pwd: pwd.value,
  };

  const options = {
    method: "post",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  // So you are using the html alert to pop up wrong messages? That's a good method!
  const rawData = await fetch("/login", options);
  if (rawData.status === 200) {
    window.location.assign("/dashboard");
  } else if (rawData.status === 409) {
    const res = await rawData.json();
    alert(res.login);
  } else {
    alert("Something's wrong, please try again");
  }
}
