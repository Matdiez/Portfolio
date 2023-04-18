const MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})

const typed = new Typed('.auto-input', {
    strings: ['Full Stack Developer!', 'Freelancer!'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
})

let navLinks = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')

window.addEventListener('scroll', function () {
    const scrollPos = this.window.scrollY + 20
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)) {
            navLinks.forEach(link => {
                link.classList.remove('active')
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            })
        }
    })
})

document.getElementById('form').addEventListener('submit', function (event) {
    var recaptcha = document.querySelector('[name="g-recaptcha-response"]');
    if (recaptcha.value === '') {
        event.preventDefault();
        alert('Por favor, completa el reCAPTCHA');
    }
    /*document.getElementById('form')
        .addEventListener('submit', function (event) {
            event.preventDefault();

            const serviceID = 'default_service';
            const templateID = 'template_hqi1fof';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert('Sent!');
                }, (err) => {
                    alert(JSON.stringify(err));
                });
            form.reset()
        });*/
});