import '@storybook/addon-console';
import { configure } from '@storybook/react';
import { withOptions } from "@storybook/addon-options";


withOptions({
	name: "React Zap",
	addonPanelInRight: true
});

const req = require.context('../src/Components', true, /[^/]+\/stories.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
