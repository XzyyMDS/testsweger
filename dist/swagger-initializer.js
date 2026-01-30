window.onload = function() {

  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
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
      layout: "BaseLayout"
    });
  });

  //</editor-fold>
};
