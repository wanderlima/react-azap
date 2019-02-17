import '@storybook/addon-console';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from "@storybook/addon-options";

import themeDecorator from './themeDecorator'

setOptions({
	name: '⚡ React AZap',
	url: 'https://github.com/wanderlima/react-azap#readme',
	addonPanelInRight: true
});

addDecorator(themeDecorator)

const req = require.context('../src/Components', true, /.stories.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
