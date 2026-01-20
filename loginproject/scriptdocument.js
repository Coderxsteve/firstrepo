
// correct passwords (ARRAY)
let correctPasswords = ["1234", "admin", "pass"];

// FUNCTION
function login() {

  // VARIABLES
  let name = document.getElementById("username").value;
  let pass = document.getElementById("password").value;
  let msg = document.getElementById("message");

  // CONDITION + LOOP
  let isCorrect = false;

  for (let i = 0; i < correctPasswords.length; i++) {
    if (pass === correctPasswords[i]) {
      isCorrect = true;
    }
  }

  // FINAL DECISION
  if (isCorrect) {
    msg.innerText = "Welcome " + name + " 🎉";
    msg.style.color = "green";
  } else {
    msg.innerText = "Wrong Password ❌";
    msg.style.color = "red";
  }
}



