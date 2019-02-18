
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
				type: "confirm",
				name: "stateless",
				message: "Is it a stateless Component?",
				default: "y"
			},
		],

		actions: data => {

			var actions = [];

			if (data.stateless) {
				actions.push({
					type: "add",
					path: `${PATH}/{{componentName}}/{{componentName}}.js`,
					templateFile: "./templates/componentStateless.js.hbs"
				});
			}

			actions.push({
				type: "add",
				path: `${PATH}/{{componentName}}/{{componentName}}.stories.js`,
				templateFile: "./templates/stories.js.hbs"
			});

			actions.push({
				type: "add",
				path: `${PATH}/{{componentName}}/{{componentName}}.test.js`,
				templateFile: "./templates/test.js.hbs"
			});

			actions.push({
				type: "add",
				path: `${PATH}/{{componentName}}/README.md`,
				templateFile: "./templates/README.md.hbs"
			});

			actions.push({
				type: "add",
				path: `${PATH}/{{componentName}}/index.js`,
				templateFile: "./templates/index.js.hbs"
			});

			actions.push({
				type: 'modify',
				path: `${PATH}/index.js`,
				pattern: /(\/\/ PLOP: Prepend import here)/gi,
				template: `export { default as {{componentName}} } from './{{componentName}}';\n$1`
			});

			return actions;

		}

	});

};
