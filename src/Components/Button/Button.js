import React from 'react';
import styled, { css } from 'styled-components';
import defaultTheme from '../../theme';


const ButtonWrapper = styled.button`

	outline: none;
	cursor: pointer;
	background: none;
	padding: 0.5em 1em;
	color: ${props => props.theme.font.color};
	font-size: ${props => props.theme.font.size};
	font-family: ${props => props.theme.font.main};
	height: ${props => props.theme.button.minHeight};
	border: solid 0.2em ${props => props.theme.color.primary};
	border-radius: ${props => props.theme.button.borderRadius.min};

	:disabled{
		cursor: initial;
		color: ${props => props.theme.color.gray.main};
		background: ${props => props.theme.color.gray.light};
		border-color: ${props => props.theme.color.gray.main};
	}

`;


const Button = (props) => {
	return (
		<ButtonWrapper
			className="azap-button"
			{...props}
		>
			{props.children}
		</ButtonWrapper>
	);
}


export default Button;


Button.defaultProps = {
	theme: defaultTheme
}
