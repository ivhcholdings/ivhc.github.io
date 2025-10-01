// Enhanced navbar scroll effect
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.7)';
    navbar.style.background = 'rgba(0, 0, 0, 0.98)';
  } else {
    navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    navbar.style.background = 'rgba(0, 0, 0, 0.95)';
  }
});

// Add parallax effect to hero orbs
window.addEventListener('mousemove', (e) => {
  const orbs = document.querySelectorAll('.gradient-orb');
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;

  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 20;
    const x = (mouseX - 0.5) * speed;
    const y = (mouseY - 0.5) * speed;
    orb.style.transform = `translate(${x}px, ${y}px)`;
  });
});
