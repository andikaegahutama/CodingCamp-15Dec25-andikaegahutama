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

const form = document.getElementById("formulir");
const result = document.getElementById("resultContent");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("nama");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const message = document.getElementById("message");

  if (name.value === "" || name.value === null) {
    alert("Nama harus diisi!");
    name.focus();

    return;
  }

  if (email.value === "" || email.value === null) {
    alert("Email tidak boleh kosong!");
    email.focus();

    return;
  }

  if (phone.value === "" || phone.value === null) {
    alert("Nomor HP wajib diisi!");
    phone.focus();
    return;
  } else if (phone.value.length < 10) {
    alert("Nomor HP wajib lebih dari 10 digit!");
    phone.focus();
    return;
  }

  if (message.value === "" || message.value === null) {
    alert("Pesan wajib diisi!");
    phone.focus();
    return;
  }

  alert(`Form Berhasil Dikirim:   
Nama: ${name.value} 
Email: ${email.value} 
No HP: ${phone.value} 
Message: ${message.value} `);

  result.innerHTML = `<b>Form Berhasil Dikirim:</b> <br />
Nama: ${name.value} <br />
Email: ${email.value} <br />
No HP: ${phone.value} <br />
Message: ${message.value} 
`;
  result.scrollIntoView();

  form.reset();
});
