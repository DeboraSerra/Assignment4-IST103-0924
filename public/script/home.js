const DASHBOARD = "listprojects.html";

const signInGoogle = async () => {
  let provider = new firebase.auth.GoogleAuthProvider();

  provider.addScope("email");

  try {
    const userCredential = await firebase.auth().signInWithPopup(provider);
    console.log("Logging successfully", userCredential.user);
    location.href = DASHBOARD;
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log("Logging fail", errorMessage, errorCode);
  }
};

const signIn = async (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  try {
    const userCredential = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    let user = userCredential.user;
    console.log("Logging successfully", user);
    location.href = DASHBOARD;
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log("Logging fail", errorMessage, errorCode);
  }
};

const signUp = async () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  try {
    const userCredential = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    let user = userCredential.user;
    console.log("Account created", user);
    location.href = DASHBOARD;
  } catch (error) {
    let errorCode = error.code;
    let errorMessage = error.message;
    console.log("Logging fail", errorMessage, errorCode);
  }
};

window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      location.href = "listprojects.html";
    }
  });
  document.querySelector("form").addEventListener("submit", signIn);
  document.getElementById("sign-in").addEventListener("click", signIn);
  document
    .getElementById("sign-google")
    .addEventListener("click", signInGoogle);
  document.getElementById("sign-up").addEventListener("click", signUp);
};
