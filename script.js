// Проста JS логика за contact form submit
document.querySelector('.contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Съобщението е изпратено! Ще се свържем с вас скоро.');
    this.reset();
});
