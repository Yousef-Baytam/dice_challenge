const imgs = document.querySelectorAll('img')
const randomSrc = ['./images/dice1.png', './images/dice2.png', './images/dice3.png', './images/dice4.png', './images/dice5.png', './images/dice6.png']
const h1 = document.querySelectorAll('h1')

const randomImg = () => randomSrc[Math.floor(Math.random() * randomSrc.length)]

for (let img of imgs) {
    img.src = `${ randomImg() }`
}
