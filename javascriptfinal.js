


document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.button-hover');
  if (buttons.length >= 2) {
    const texteArchi = document.createElement('div');
    texteArchi.className = "replacement-text";
    texteArchi.textContent = "\n\n\nOEUVRES PLASTIQUES\nDIVERSES\nExplorez mon petit monde\ncréatif";

    const texteArts = document.createElement('div');
    texteArts.className = "replacement-text";
    texteArts.textContent = "\n\n\nSELECTION DE TRAVAUX\nD'ARCHITECTURE\n";

    buttons[0].appendChild(texteArts);
    buttons[1].appendChild(texteArchi);

    buttons[0].addEventListener('mouseenter', () => {
      const img = buttons[1].querySelector('img');
      if (img) img.style.opacity = 0;
      texteArchi.classList.add('visible');
    });

    buttons[0].addEventListener('mouseleave', () => {
      const img = buttons[1].querySelector('img');
      if (img) img.style.opacity = 1;
      texteArchi.classList.remove('visible');
    });

    buttons[1].addEventListener('mouseenter', () => {
      const img = buttons[0].querySelector('img');
      if (img) img.style.opacity = 0;
      texteArts.classList.add('visible');
    });

    buttons[1].addEventListener('mouseleave', () => {
      const img = buttons[0].querySelector('img');
      if (img) img.style.opacity = 1;
      texteArts.classList.remove('visible');
    });
  }

  const signature = document.getElementById('signature-hover');
  if (signature) {
    const texteIntro = document.createElement('div');
    texteIntro.className = "intro-presentation";
    texteIntro.textContent = "Etudiante  en  Master  à  l'ENSA-PB  \n\nCASABLANCA  TANGER  PARIS  ISTANBUL\n\nPARCOURS  DE  CES  DERNIERES  ANNEES";
    document.body.appendChild(texteIntro);

    signature.addEventListener('mouseenter', () => {
      texteIntro.classList.add('visible');
    });

    signature.addEventListener('mouseleave', () => {
      texteIntro.classList.remove('visible');
    });
  }

  const columns = document.querySelectorAll('.column');
  if (columns.length > 0) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      columns.forEach(col => {
        const speed = parseFloat(col.dataset.speed);
        const wrapper = col.querySelector('.image-wrapper');
        wrapper.style.transform = `translateY(${scrollY * speed}px)`;
      });
    });
  }
});




