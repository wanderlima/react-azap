
const PATH = "../src/components";

module.exports = plop => {

	plop.setGenerator("controller", {

		description: "ReactJS Component generator",

		prompts: [
			{
				type: "input",
				name: "componentName",
				message: "Component name?",
				default: "ComponentName"
			},
			{
				type: "list",
				name: "componentType",
				message: "Select a component type...",
				choices: [
					'Functional Stateless',
					'Functional Stateful',
					'Class'
				]
			}
		],

		actions: data => {

			var actions = [];

			if (data.componentType == 'Functional Stateless') {
				actions.push({
					type: "add",
					path: `${PATH}/{{properCase componentName}}/{{properCase componentName}}.js`,
					templateFile: "./templates/componentStateless.js.hbs"
				});
			}

			if (data.componentType == 'Functional Stateful') {
				actions.push({
					type: "add",
					path: `${PATH}/{{properCase componentName}}/{{properCase componentName}}.js`,
					templateFile: "./templates/componentStateful.js.hbs"
				});
			}

			if (data.componentType == 'Class') {
				actions.push({
					type: "add",
					path: `${PATH}/{{properCase componentName}}/{{properCase componentName}}.js`,
					templateFile: "./templates/componentClass.js.hbs"
				});
			}

			actions.push({
				type: "add",
				path: `${PATH}/{{properCase componentName}}/{{properCase componentName}}.stories.js`,
				templateFile: "./templates/stories.js.hbs"
			});

			actions.push({
				type: "add",
				path: `${PATH}/{{properCase componentName}}/{{properCase componentName}}.test.js`,
				templateFile: "./templates/test.js.hbs"
			});

			actions.push({
				type: "add",
				path: `${PATH}/{{properCase componentName}}/README.md`,
				templateFile: "./templates/README.md.hbs"
			});

			actions.push({
				type: "add",
				path: `${PATH}/{{properCase componentName}}/index.js`,
				templateFile: "./templates/index.js.hbs"
			});

			actions.push({
				type: 'modify',
				path: `${PATH}/index.js`,
				pattern: /(\/\/ PLOP: Prepend import here)/gi,
				template: `export { default as {{properCase componentName}} } from './{{properCase componentName}}';\n$1`
			});

			return actions;

		}

	});

};
