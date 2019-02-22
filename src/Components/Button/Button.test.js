import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('Testing Button component', () => {

	it('should render correctly', () => {
		const wrapper = shallow(
			<Button onClick={ jest.fn }>
				<span>Label</span>
			</Button>
		);
		expect(wrapper).toMatchSnapshot();
	})

});
