import distortion from './distortion';

window.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 16; i++) {
    document.body.appendChild(distortion(`${i}`));
  }
});
