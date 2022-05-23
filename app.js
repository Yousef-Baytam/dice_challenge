const imgs = document.querySelectorAll('img')
const randomSrc = ['./images/dice1.png', './images/dice2.png', './images/dice3.png', './images/dice4.png', './images/dice5.png', './images/dice6.png']
const h1 = document.querySelector('h1')
const button = document.createElement('button')
const buttonDiv = document.createElement('div')
let indexArray = []

const randomImg = () => randomSrc[Math.floor(Math.random() * randomSrc.length)]

const shuffle = () => {
    indexArray = []
    button.disabled = true

    for (let img of imgs) {
        let rand = randomImg()
        img.src = `${ rand }`
        indexArray.push(rand)
        img.classList.add('shaking')
    }
    let img1 = randomSrc.indexOf(indexArray[0])
    let img2 = randomSrc.indexOf(indexArray[1])
    console.log(img1)
    img1 > img2 ? h1.innerText = '🚩Player 1 Wins!'
        : img1 < img2 ? h1.innerText = '🚩Player 2 Wins!'
            : h1.innerText = 'Draw!'
    setTimeout(() => {
        for (let img of imgs) {
            img.classList.remove('shaking')
        }
        button.disabled = false
    }, 1000)
}

button.innerText = 'Shake Again!'
button.style.marginTop = '4%'
button.style.padding = '10px'
button.style.borderRadius = '5px'
button.style.backgroundColor = 'rgb(156, 0, 0)'
button.style.color = 'white'

buttonDiv.appendChild(button)
document.body.querySelector('.container').appendChild(buttonDiv)

button.addEventListener('click', shuffle)
shuffle()