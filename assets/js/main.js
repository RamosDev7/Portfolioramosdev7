// 1. Atualizar o ano do copyright automaticamente
document.getElementById('year').textContent = new Date().getFullYear();

// 2. Animação de Scroll suave usando IntersectionObserver
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15 // Dispara quando 15% do elemento estiver visível
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.scroll-animate').forEach(section => {
  observer.observe(section);
});

// 3. Feedback visual do formulário de contato
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

contactForm.addEventListener('submit', async function (e) {
  // Se ainda estiver com o placeholder do Formspree, apenas simula o envio
  if (contactForm.action.includes('SEU_CODIGO_AQUI')) {
    e.preventDefault();
    formStatus.style.color = '#22c55e';
    formStatus.textContent = 'Mensagem simulada com sucesso! (Configure seu ID do Formspree para envio real)';
    contactForm.reset();
    setTimeout(() => { formStatus.textContent = ''; }, 5000);
  }
});
