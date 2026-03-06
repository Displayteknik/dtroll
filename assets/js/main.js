// ── Scroll reveal ─────────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

revealEls.forEach(el => observer.observe(el));

// ── FAQ accordion ─────────────────────────────────────────────
const faqBtns = document.querySelectorAll('.faq-question');

faqBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('active');

    // Close all others
    faqBtns.forEach(other => {
      if (other !== btn) {
        other.classList.remove('active');
        other.setAttribute('aria-expanded', 'false');
        const otherAnswer = other.nextElementSibling;
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      }
    });

    // Toggle current
    if (isOpen) {
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      if (answer) answer.style.maxHeight = null;
    } else {
      btn.classList.add('active');
      btn.setAttribute('aria-expanded', 'true');
      if (answer) answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

// ── Form submission (Netlify AJAX) ─────────────────────────────
const form = document.getElementById('offerForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.form-submit');
    if (!submitBtn) return;

    const origText = submitBtn.innerHTML;
    submitBtn.innerHTML = 'Skickar...';
    submitBtn.disabled = true;

    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        submitBtn.innerHTML = '&#10003; Förfrågan skickad!';
        submitBtn.style.background = '#0fb8a1';
        form.reset();
        setTimeout(() => {
          submitBtn.innerHTML = origText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 4000);
      })
      .catch((error) => {
        console.error('Form submission error:', error);
        submitBtn.innerHTML = 'Fel vid sändning';
        submitBtn.style.background = '#ff4b2b';
        setTimeout(() => {
          submitBtn.innerHTML = origText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
        }, 3000);
      });
  });
}
