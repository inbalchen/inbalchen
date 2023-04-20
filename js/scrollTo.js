const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section')

const offset = 100;

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const target = document.querySelector(link.hash);
    const targetPosition = target.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

window.addEventListener('scroll', function(){
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - sectionHeight / 2)){
      currentSection = section.getAttribute('id'); 
    }
  })

  navLinks.forEach(link => {
    link.classList.remove('active')
    if(link.classList.contains(currentSection)) {
      link.classList.add('active')
    }
  })
});