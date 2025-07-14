(function() {
  // Create button dynamically
  var btn = document.createElement('button');
  btn.id = 'scrollTopBtn';
  btn.title = 'Go to top';
  btn.innerHTML = '<span style="font-size: 32px;">▲</span>';
  document.body.appendChild(btn);

  // Show/hide button on scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 850) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  // Scroll to top on click
  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
