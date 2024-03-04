let number = document.querySelector('.number h1')
let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')


let ozgaruvchi = 0


plus.addEventListener('click', function edit() {
    qoshuv()
})

minus.addEventListener('click', function edit() {
    ayiruv()
})

number.addEventListener('click', function edit() {
    reset()
})

function qoshuv() {
    ozgaruvchi += 1
    number.innerHTML = ozgaruvchi
    number.style.color = 'green'
    number.style.transform = 'translateX(-76px)'
    number.style.border = '5px solid green'
    number.style.backgroundColor = 'greenyellow'
}

function ayiruv() {
    ozgaruvchi -= 1
    number.innerHTML = ozgaruvchi
    number.style.color = 'red'
    number.style.transform = 'translateX(76px)'
    number.style.border = '5px solid red'
    number.style.backgroundColor = 'rgb(254, 96, 96)'
}

function reset() {
    ozgaruvchi = 0
    number.innerHTML = ozgaruvchi
    number.style.color = 'black'
    number.style.border = '5px solid black'
    number.style.backgroundColor = '#999'
    number.style.transform = 'translateX(0px)'
}