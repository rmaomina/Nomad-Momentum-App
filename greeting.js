const greetingForm = document.querySelector(".js-greetingForm"), input = greetingForm.querySelector("input"), greeting = document.querySelector(".js-greeting");

const USER_LS = "currUser", SHOWING_ON = "showing"

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currValue = input.value;
  paintGreeting(currValue);
  saveName(currValue);
}

function askForName() {
  greetingForm.classList.add(SHOWING_ON);
  greetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  greetingForm.classList.remove(SHOWING_ON)
  greeting.classList.add(SHOWING_ON);
  greeting.innerText = `Hello, ${text}`
}

function loadName() {
  console.log("LS: loadName");
  const currUserName = localStorage.getItem(USER_LS);
  if (currUserName === null) {
    // She is not -> Ask who
    askForName();
  } else {
    // She is -> greeting!
    paintGreeting(currUserName);
  }
}

loadName();