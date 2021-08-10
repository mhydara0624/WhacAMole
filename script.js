const boxes = document.querySelectorAll('.box')
const timer = document.querySelector('.time')
const score = document.querySelector('.score')
const mole = document.querySelector('.mole')
let currentScore = 0
let timeLeft = 60
let molePosition
let randomBox

function addMole() {
  boxes.forEach((box) => {
    box.classList.remove('mole')
  })

  let randomBox = boxes[Math.floor(Math.random() * 9)]
  randomBox.classList.add('mole')
  randomBox.id = molePosition
  console.log(randomBox)
}
addMole()

function moleMovements() {
  setInterval(addMole, Math.random() * 1500)
}
moleMovements()

// function() {
//   let molePosition = randomBox.id
//   if (randomBox.id == molePosition) {
//     currentScore++
//     score.innerText = currentScore
//     console.log(currentScore)
//   }
// }
// whackMole()

// boxes.forEach((box) => {
//   box.addEventListener('click', function () {
//     // let molePosition = randomBox.id
//     if (box.id == molePosition) {
//       currentScore++
//       // console.log(currentScore)
//     }
//   })
// })
