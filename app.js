const imgs = document.querySelectorAll('img')
const randomSrc = ['./images/dice1.png', './images/dice2.png', './images/dice3.png', './images/dice4.png', './images/dice5.png', './images/dice6.png']
const h1 = document.querySelector('h1')
const button = document.createElement('button')

const randomImg = () => randomSrc[Math.floor(Math.random() * randomSrc.length)]

const shuffle = () => {
    for (let img of imgs) {
        img.src = `${ randomImg() }`
    }
    let img1 = parseInt(imgs[0].src.slice(33, 34))
    let img2 = parseInt(imgs[1].src.slice(33, 34))

    img1 > img2 ? h1.innerText = 'Player 1 Wins!'
        : img1 < img2 ? h1.innerText = 'Player 2 Wins!'
            : h1.innerText = 'Draw!'
}

button.innerText = 'Shake Again!'
button.style.marginLeft = '46%'
button.style.marginTop = '5%'
button.style.padding = '10px'
button.style.borderRadius = '5px'
button.style.backgroundColor = 'rgb(156, 0, 0)'
button.style.color = 'white'

document.body.appendChild(button)

button.addEventListener('click', shuffle)
shuffle()