// La Table de Silgat — comportements interactifs

document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const joinForm = document.getElementById('joinForm');
const formStatus = document.getElementById('formStatus');

joinForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!joinForm.checkValidity()) {
    joinForm.reportValidity();
    return;
  }

  const nom = document.getElementById('nom').value.trim();
  formStatus.textContent = `Merci ${nom} ! Votre demande a bien été enregistrée. Nous vous recontacterons bientôt.`;
  joinForm.reset();
});
