module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator("component", {
    description: "Create React component with tests",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please"
      }
    ],
    actions: [
      {
        type: "addMany",
        base: "templates/component",
        destination: "src/components/{{dashCase name}}/",
        templateFiles: "templates/component/**/*.hbs"
      }
    ]
  });
};
