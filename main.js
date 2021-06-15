const board = document.querySelector('#board');
const SQUARE_COUNT = 506;
const colors = ['red', 'orange', 'blue', 'green', 'white', 'yellow'];

const getRandomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

const getColor = (element) => {
  const color = getRandomColor()
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (element) => {
  element.style.background = '#da7777'
  element.style.boxShadow = `0 0 2px #000`
}

for (let i = 0; i < SQUARE_COUNT; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  board.append(square);

  square.addEventListener('mouseover', () => {
    getColor(square)
  })

  square.addEventListener('mouseout', () => {
    removeColor(square)
  })
}
