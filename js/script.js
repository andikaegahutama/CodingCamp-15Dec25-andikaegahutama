// const promptUser = prompt("Please input your name", "");

// document.getElementById("name").innerHTML = promptUser;

// document.addEventListener("DOMContentLoaded", function () {
//   const prompter = prompt("Input your name:", "");

//   if (prompter == null || prompter == "") {
//     return prompter;
//   }
//   document.getElementById("name").innerHTML = prompter;
//   document.getElementsByClassName("headerText")[0].style.display = "inline";
// });

function fillName() {
  const prompter = prompt(
    "Welcome to Taka Company, Please Input your name: ",
    ""
  );
  const welcomeDOM = document.getElementById("name");

  if (prompter === null || prompter.trim() === "") {
    welcomeDOM.innerHTML = "Hi Guest!";
  } else {
    welcomeDOM.innerHTML = "Hi " + prompter + ", ";
  }
}

fillName();
