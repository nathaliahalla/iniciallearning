const meuCabecalho = document.querySelector('h1');
meuCabecalho.textContent = 'Ola mundo!';

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

    multiply(4, 7);
    multiply(20, 20);
    multiply(0.5, 3);
  
    console.log(multiply(2, 4));
    

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/dogs.jpg') {
      myImage.setAttribute ('src','images/dogs2.jpg');
    } else {
      myImage.setAttribute ('src','images/dogs.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }