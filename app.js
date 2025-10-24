
    // ======= WhatsApp flotante: mostrar tras scroll + mensaje por horario =======
document.addEventListener('DOMContentLoaded', () => {
  const waBtn = document.querySelector('.whatsapp-float');
  if (waBtn) {
    // 1) Mensaje dinámico según hora local (9 a 18 h "en línea")
    const h = new Date().getHours();
    const enHorario = h >= 9 && h < 18;
    const msg = enHorario ? '¡Respondo ahora!' : 'Fuera de horario, te contesto pronto';

    waBtn.title = WhatsApp — ${msg};
    waBtn.setAttribute('aria-label', Chatea por WhatsApp — ${msg});

    // (Opcional) Prefill del texto en el chat
    const telefono = '521234567890'; // ✅ Número ficticio (52 + 10 dígitos)
    const texto = encodeURIComponent('Hola, vengo del sitio Pedri Store. Me interesa una playera.');
    waBtn.href = https://wa.me/${telefono}?text=${texto};

    // 2) Mostrar/ocultar por scroll (aparece al bajar 300px)
    const UMBRAL = 300;
    const toggleWA = () => {
      if (window.scrollY > UMBRAL) {
        waBtn.classList.add('show');
      } else {
        waBtn.classList.remove('show');
      }
    };

    // Estado inicial y listener
    toggleWA();
    window.addEventListener('scroll', toggleWA, { passive: true });
  }
});