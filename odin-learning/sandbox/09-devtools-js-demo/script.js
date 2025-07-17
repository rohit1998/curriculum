const colorBtn = document.getElementById('colorBtn');
const demoText = document.getElementById('demoText');

colorBtn.addEventListener('click', () => {
  // Try setting a breakpoint here!
  demoText.style.color = demoText.style.color === 'red' ? '#0077cc' : 'red';
  console.log('Button clicked!');
});

// Try running code in the console to change demoText
// Example: demoText.textContent = 'Changed from console!';
