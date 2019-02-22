import '@storybook/addon-console';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from "@storybook/addon-options";

import themeDecorator from './themeDecorator';

addDecorator(
	withOptions({
		name: '⚡ React AZap',
		url: 'https://github.com/wanderlima/react-azap#readme',
		addonPanelInRight: true
	})
);

addDecorator(themeDecorator);

const req = require.context('../src/components', true, /.stories.js$/);

function loadStories() {
	require('./Welcome')
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
