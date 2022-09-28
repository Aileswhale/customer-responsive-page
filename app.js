const mainBar = document.querySelector('.mainBar')
const closeBtn = document.querySelector('.closeBtn')
const navbar = document.querySelector('.navSection')
const text = navbar.classList.contains('mainBar')
const navBarFunc = ()=>{
   
        navbar.classList.add('newBar')
mainBar.classList.add('close')
}

const closeButton = ()=>{
     navbar.classList.remove('newBar')
      mainBar.classList.remove('close')
}



closeBtn.addEventListener('click', closeButton)
mainBar.addEventListener('click', navBarFunc)