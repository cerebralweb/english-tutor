(function () {
  var contactSection = document.createElement('section');
  contactSection.id = 'contacto';
  contactSection.innerHTML = ''
    + '<h2>Contáctame / Contact Me!</h2>'
    + '<p>WhatsApp: <a href="https://wa.me/52XXXXXXXXX">+52 XXXXXXXXXX</a></p>'
    + '<p>Instagram: <a href="https://instagram.com/clpalacios">@clpalacios</a></p>'
    + '<p>Facebook: <a href="https://facebook.com/clpalacios">/clpalacios</a></p>'
    + '<p>Email: <a href="mailto:contacto@clpalacios.in">contacto@clpalacios.in</a></p>';

  document.addEventListener('DOMContentLoaded', function () {
    var main = document.querySelector('main');
    if (main) {
      main.appendChild(contactSection);
    } else {
      document.body.appendChild(contactSection); // fallback
    }
  });
})();
