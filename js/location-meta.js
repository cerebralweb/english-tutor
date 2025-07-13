(function () {
  // 🔧 Customize this object with your city-specific content
  var locations = {
    "Morelia": {
      title: "CL Palacios | Inglés y Programación en Morelia",
      description: "Clases de inglés personalizadas y programación básica en inglés. Online y presenciales en Morelia."
    },
    "CDMX": {
      title: "CL Palacios | Clases en Ciudad de México",
      description: "Aprende inglés y programación básica en inglés con un tutor desde CDMX. Online o presencial."
    },
    "default": {
      title: "CL Palacios | Clases de Inglés y Programación",
      description: "Clases de inglés personalizadas y programación básica en inglés. Online y presenciales."
    }
  };

  // 🌍 Set your active location here:
  var currentCity = "Morelia"; // Change this when you move!

  // Get location-specific content or fallback
  var content = locations[currentCity] || locations["default"];

  // Inject <title>
  var title = document.createElement("title");
  title.textContent = content.title;
  document.head.appendChild(title);

  // Inject <meta name="description">
  var meta = document.createElement("meta");
  meta.name = "description";
  meta.content = content.description;
  document.head.appendChild(meta);
})();
