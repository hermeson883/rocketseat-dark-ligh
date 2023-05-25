let button = document.querySelector('button');
let center = document.querySelector('.center');
let switcher = document.querySelector('#switcher');

button.addEventListener('click', () => {
    if (center.classList == "center light"){
        center.classList.remove('light')

        //switcher change
        switcher.id = "switcher-light"
        console.log(button.style.width)

    }else{
        center.classList.add("light")
        switcher.id = "switcher-dark"
    }
})
