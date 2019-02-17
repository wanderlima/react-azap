import React from 'react'
import { ThemeProvider } from "styled-components";

import theme from "../src/theme";


const themeDecorator = storyFn => (
	<ThemeProvider theme={theme}>
		{storyFn()}
	</ThemeProvider>
);

export default themeDecorator;
