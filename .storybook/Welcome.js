import { storiesOf } from '@storybook/react';
import { doc, withReadme } from 'storybook-readme';

import README from '../README.md';

const stories = storiesOf('Welcome', module);
stories.addDecorator(doc(README));
stories.addDecorator(withReadme(README));

stories
	.add(
		'Hi there!', () => { }
	);
