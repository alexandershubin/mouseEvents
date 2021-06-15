const board = document.querySelector('#board');
const SQUARE_COUNT = 506;
const colors = ['red', 'orange', 'blue', 'green', 'white', 'yellow'];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
}

const getColor = ({target}) => {
  const color = getRandomColor();
  target.style.background = color;
  target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = ({target}) => {
  target.style.background = '#da7777'
  target.style.boxShadow = `0 0 2px #000`
}

for (let i = 0; i < SQUARE_COUNT; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);

  square.addEventListener('mouseover', getColor);
  square.addEventListener('mouseout', removeColor);
}
