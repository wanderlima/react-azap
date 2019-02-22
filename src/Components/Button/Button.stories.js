import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';

import { Button } from '../../components';
import README from './README.md';

const stories = storiesOf('Button', module);
stories.addDecorator(withReadme(README));
stories.addDecorator(withKnobs);


stories
	.add(
		'Default', () => (
			<Button
				onClick={ action('onClick') }
				disabled={ boolean('Disabled', false) }
			>
				{text('Label', 'Label')}
			</Button>
		)
	);
