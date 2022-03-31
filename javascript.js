const button2 = document.getElementById("button2");
let container2 = document.querySelector(".container2");
let container = document.querySelector(".container");

button2.addEventListener("click", () => {
  container2.style.display = "flex";
  container.style.display = "none";
});

butnLogIn.onclick = function () {
  container2.style.display = "flex";
};
let userStored = JSON.parse(localStorage.getItem("users"));
function cheack() {
  // inlocl storage email and pass
  const emailLogin = document.getElementById("emailInput").value;
  const passLogin = document.getElementById("pasword").value;
  userStored = JSON.parse(localStorage.getItem("users"));
  var a = 0;
  if (userStored) {
    userStored.forEach((element, id) => {
      // console.log(element.email + " " + id);
      if (element.email == emailLogin && element.pasword == passLogin) {
        location.href = "https://netixsol.com/";
      }
      // else {
      //   alert('You do not have permission to view items');
      // }
    });
  } else {
    alert("Invalid pasword");
  }
}
function store(e) {
  e.preventDefault();
  const userName = document.getElementById("userName").value;
  const email2 = document.getElementById("email2").value;

  const pass = document.getElementById("pasword1").value;

  userStored = JSON.parse(localStorage.getItem("users"));
  if (!userStored) {
    userStored = [];
  }
  let forminfo = {
    name: userName,
    email: email2,
    pasword: pass,
  };
  userStored.push(forminfo);
  localStorage.setItem("users", JSON.stringify(userStored));
  userName.value = "";
  email2.value = "";
  pass.value = "";
  alert("account Create");
}
