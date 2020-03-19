const button = document.querySelector('.hexBtn');
const background = document.querySelector('body');
const hexSpan = document.querySelector('.hex');

function changeColor() {
  const hexDigits = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
  ];
  let randomArray = [];
  let random1 = Math.floor(Math.random() * hexDigits.length);
  let hexDigit1 = hexDigits[random1];
  randomArray.push(hexDigit1);
  let random2 = Math.floor(Math.random() * hexDigits.length);
  let hexDigit2 = hexDigits[random2];
  randomArray.push(hexDigit2);
  let random3 = Math.floor(Math.random() * hexDigits.length);
  let hexDigit3 = hexDigits[random3];
  randomArray.push(hexDigit3);
  let random4 = Math.floor(Math.random() * hexDigits.length);
  let hexDigit4 = hexDigits[random4];
  randomArray.push(hexDigit4);
  let random5 = Math.floor(Math.random() * hexDigits.length);
  let hexDigit5 = hexDigits[random5];
  randomArray.push(hexDigit5);
  let random6 = Math.floor(Math.random() * hexDigits.length);
  let hexDigit6 = hexDigits[random6];
  randomArray.push(hexDigit6);
  let color = '#' + randomArray.join('');
  background.style.backgroundColor = color;
  hexSpan.innerHTML = color;
}
button.addEventListener('click', changeColor);
