const showUserName = () => {
  const user = firebase.auth().currentUser;
  const name = user.displayName ?? user.email;
  const span = document.querySelector("span#user");
  span.innerHTML = name;
};

const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("logged out");
      location.href = "index.html";
    })
    .catch((error) => {
      console.log(error);
    });
};

const showImg = () => {
  window.open("", "", "popup").document.write(`<img
            src="./assets/wireframe-assignment-3.jpeg"
            alt="Wireframe assignment 3"
            width="900"
            height="1200"
            id="wire"
            style="max-width: 100%; height: auto; max-height: 100%; width: auto; margin: 0 auto; display: block;"
          />`);
};

window.onload = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      location.href = "index.html";
    }
  });

  document.getElementById("btn-wire").addEventListener("click", showImg);

  document.querySelector("#log-out").addEventListener("click", logOut);
  showUserName();
};
