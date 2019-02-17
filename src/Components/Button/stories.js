import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import { Button } from '../../Components';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories
	.add(
		'Default', () => (
			<Button
				onClick={action('onClick')}
				disabled={boolean('Disabled', false)}
			>
				{text('Label', 'Button Label')}
			</Button>
		),
	);
