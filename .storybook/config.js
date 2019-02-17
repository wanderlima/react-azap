import React from 'react';
import '@storybook/addon-console';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from "@storybook/addon-options";
import { withInfo } from '@storybook/addon-info';

import themeDecorator from './themeDecorator'

setOptions({
	name: 'React Zap',
	url: 'https://github.com/wanderlima/react-zap#readme',
	addonPanelInRight: true
});

addDecorator(themeDecorator)

addDecorator(
	withInfo({
		inline: true,
		source: true
	})
);

const req = require.context('../src/Components', true, /[^/]+\/stories.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
