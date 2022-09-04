function getPassword() {
  let characters = "abcdefghijklmnopqrstuvwxyzACBDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  let passwordLenght = 15;
  let passwordA = "";
  let passwordB = "";
  let passwordC = "";
  let passwordD = "";

  for (let i = 0; i < passwordLenght; i++) {
    let randomNumberA = Math.floor(Math.random() * characters.length);
    passwordA += characters.substring(randomNumberA, randomNumberA + 1)
  }
  document.getElementById("passwordA").value = passwordA


  for (let i = 0; i < passwordLenght; i++) {
    let randomNumberB = Math.floor(Math.random() * characters.length);
    passwordB += characters.substring(randomNumberB, randomNumberB + 1)
}
document.getElementById("passwordB").value = passwordB


  for (let i = 0; i < passwordLenght; i++) {
    let randomNumberC = Math.floor(Math.random() * characters.length);
    passwordC += characters.substring(randomNumberC, randomNumberC + 1)
}
document.getElementById("passwordC").value = passwordC


    for (let i = 0; i < passwordLenght; i++) {
    let randomNumberD = Math.floor(Math.random() * characters.length);
  passwordD += characters.substring(randomNumberD, randomNumberD + 1)
}
document.getElementById("passwordD").value = passwordD
}

function copyPassA() {
  let copyPassTextA = document.getElementById("passwordA");
  copyPassTextA.select();
  copyPassTextA.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyPassTextA.value);
  alert("Copied the text: " + copyPassTextA.value);
}

function copyPassB() {
  let copyPassTextB = document.getElementById("passwordB");
  copyPassTextB.select();
  copyPassTextB.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyPassTextB.value);
  alert("Copied the text: " + copyPassTextB.value);
}

function copyPassC() {
  let copyPassTextC = document.getElementById("passwordC");
  copyPassTextC.select();
  copyPassTextC.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyPassTextC.value);
  alert("Copied the text: " + copyPassTextC.value);
}

function copyPassD() {
  let copyPassTextD = document.getElementById("passwordD");
  copyPassTextD.select();
  copyPassTextD.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyPassTextD.value);
  alert("Copied the text: " + copyPassTextD.value);
}