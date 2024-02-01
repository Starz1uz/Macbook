let img = document.querySelector(`img`)
let cena = document.querySelector(`h1`)


let button = document.querySelector(`#odin`)
let dblbutton = document.querySelector(`#dwa`)

button.onclick = () => {
    img.src = `img/mbp14-silver-select-202110 1.png` 
    
    }
    dblbutton.onclick = () => {
        img.src = `img/mbp14-spacegray-select-202110 1.png`

    }

    let btns = document.querySelectorAll(`.btns button`)

    btns[0].onclick = () => {
        cena.innerHTML = `$1,999`
    }
    btns[1].onclick = () => {
        cena.innerHTML = `$2,199`
    }
    btns[2].onclick = () => {
        cena.innerHTML = `$2,599`
    }
    btns[3].onclick = () => {
        cena.innerHTML = `$3,199`
    }
