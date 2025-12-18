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
