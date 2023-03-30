// Navbar Toggle
const MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})

// Typing effect
const typed = new Typed('.auto-input', {
    strings: ['Full Stack Developer!', 'Freelancer!'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
})