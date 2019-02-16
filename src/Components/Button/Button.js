import React from 'react';
import styled, { css } from 'styled-components'
import * as THEME from '../../theme';

const Container = styled.button`
	padding: 0.5em 1em;
	color: ${THEME.WHITE};
	background: ${THEME.DARK_GREY};
	outline: none;
	border: none;
	border-radius: 3px;
	font-size: ${THEME.FONT_SIZE};
`;


const Button = (props) => {
	return (
		<Container
			className="zap-btn"
			{...props}
		>
			{props.children}
		</Container>
	);
}

export default Button;
