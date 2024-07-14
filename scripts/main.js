const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox2.png") {
    myImage.setAttribute(
      "src",
      "https://i.pinimg.com/474x/22/18/89/221889e95d41156b2b66e0859d02c3cc.jpg"
    );
  } else {
    myImage.setAttribute("src", "images/firefox2.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, ${myName}";
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, ${storedName}";
}
myButton.onclick = () => {
  setUserName();
};
function setUserName() {
  const myName = prompt("please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, ${myName}";
  }
}
