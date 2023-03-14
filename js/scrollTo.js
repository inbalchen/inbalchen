const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section')

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
}) 



