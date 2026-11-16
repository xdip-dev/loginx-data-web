const contactForm = document.getElementById('brief');
const contactEmail = document.getElementById('contact-email');
const need = document.getElementById('need');
const problem = document.getElementById('problem');
const language = document.getElementById('language');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const subject = `${contactForm.dataset.subject} : ${need.value}`;
  const body = [
    problem.value.trim().replace(/\r\n|\r|\n/g, '\r\n'),
    `${contactForm.dataset.languageLabel} : ${language.value}`,
  ].join('\r\n\r\n');

  window.location.href = `${contactEmail.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

contactForm.hidden = false;
