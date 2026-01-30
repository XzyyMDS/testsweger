window.onload = function() {
 fetch('swagger-ui.json')
  .then(response => response.json())
  .then(spec => {
    const ui = SwaggerUIBundle({
      spec: spec,
      dom_id: '#swagger-ui',
        presets: [
    SwaggerUIBundle.presets.apis,
    SwaggerUIBundle.SwaggerUIStandalonePreset
  ],
  layout: "BaseLayout",
  displayRequestDuration: true,
  docExpansion: "none"
      });
  });
};