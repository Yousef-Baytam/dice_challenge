const imgs = document.querySelectorAll('img')
const randomSrc = ['./images/dice1.png', './images/dice2.png', './images/dice3.png', './images/dice4.png', './images/dice5.png', './images/dice6.png']

const randomImg = () => randomSrc[Math.floor(Math.random() * randomImg.length)]


