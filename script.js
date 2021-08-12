const boxes = document.querySelectorAll('.box')
const timer = document.querySelector('#time')
const score = document.querySelector('#score')
const mole = document.querySelector('.mole')
let currentScore = 0
let timeLeft = 60
let molePosition
let randomBox
const playAgain = document.querySelector('.restart')

function addMole() {
  boxes.forEach((box) => {
    box.classList.remove('mole')
  })
  let randomPosition = Math.floor(Math.random() * 9)
  let randomBox = boxes[randomPosition]
  randomBox.classList.add('mole')
  molePosition = randomBox.id
}
addMole()

function moleMovements() {
  moleActive = setInterval(addMole, Math.random() * 1800)
}
moleMovements()

function timeTicking() {
  timeLeft--
  timer.innerText = timeLeft

  if (timeLeft == 0) {
    clearInterval(countDownTimer)
    clearInterval(moleActive)
    alert('WOO-HOO YOUR FINAL SCORE IS ' + currentScore)
  }
}
countDownTimer = setInterval(timeTicking, 1000)

function reload() {
  reload = location.reload()
}

boxes.forEach((box) => {
  box.addEventListener('click', function () {
    if (box.id == molePosition) {
      currentScore += 10
      score.innerText = currentScore
    }
  })
})

playAgain.addEventListener('click', reload)
