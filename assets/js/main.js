document.documentElement.classList.add('js');
const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.primary-nav a');
const faqQuestions = document.querySelectorAll('.faq-question');
const contactForm = document.querySelector('#contact-form');
const feedback = document.querySelector('#form-feedback');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.closest('.faq-item');
    const isOpen = item.classList.toggle('open');
    question.setAttribute('aria-expanded', String(isOpen));
  });
});

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get('name')?.toString().trim() || '';
    const phone = formData.get('phone')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';

    const text = `Olá! Gostaria de agendar uma consulta.%0A%0ANome: ${encodeURIComponent(name)}%0ATelefone: ${encodeURIComponent(
      phone
    )}%0AMensagem: ${encodeURIComponent(message)}`;

    feedback.textContent = 'Redirecionando para o WhatsApp...';
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank', 'noopener,noreferrer');
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.fade-in').forEach((element) => observer.observe(element));
