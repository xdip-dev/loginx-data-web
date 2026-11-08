const motionAllowed = matchMedia(
  '(any-hover: hover) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)'
);

const trail = document.createElement('div');
trail.className = 'cursor-trail';
trail.setAttribute('aria-hidden', 'true');
document.body.append(trail);

let previousParticle;

function clearTrail() {
  trail.replaceChildren();
  previousParticle = undefined;
}

window.addEventListener('pointermove', (event) => {
  if (!motionAllowed.matches || event.pointerType !== 'mouse') return;

  const { clientX: x, clientY: y, timeStamp: time } = event;
  if (previousParticle && (
    time - previousParticle.time < 24 ||
    Math.hypot(x - previousParticle.x, y - previousParticle.y) < 7
  )) return;

  previousParticle = { x, y, time };
  const particle = document.createElement('span');
  particle.className = 'cursor-particle';
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.setProperty('--drift-x', `${Math.random() * 14 - 7}px`);
  particle.style.setProperty('--particle-size', `${3 + Math.random() * 2}px`);
  particle.addEventListener('animationend', () => particle.remove(), { once: true });
  trail.append(particle);
}, { passive: true });

document.documentElement.addEventListener('pointerleave', clearTrail);
window.addEventListener('blur', clearTrail);
motionAllowed.addEventListener('change', clearTrail);
