let starts = document.getElementById('starts')
let moon = document.getElementById('moon')
let text = document.querySelector('.text-h2')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')



window.onscroll = () => {
    let value = scrollY
    starts.style.left = value + 'px'
    moon.style.top = value * 4 + 'px'
    mountains3.style.top = value * 2 + 'px'
    mountains4.style.top = value * 1.5 + 'px'
    river.style.top = value + 'px'
    boat.style.top = value + 'px'
    boat.style.left = value * 3 + 'px'
    text.style.fontSize = value + 'px'

    if (scrollY >= 76) {
        text.style.fontSize = 76 + 'px'
        text.style.position = 'fixed'

        if (scrollY >= 541) {
            text.style.display = 'none'
        } else {
            text.style.display = 'block'
        }
        // light morning
        if (scrollY >= 156) {
            document.querySelector('.main').style.background = 'linear-gradient(#2f76e1 , #4b99e9 )'
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016 , #4b99e9)'
        }

    }
}
