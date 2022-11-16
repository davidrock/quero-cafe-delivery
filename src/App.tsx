import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { ShoppingCartContextProvider } from './contexts/ShoppingCartContext';

function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter>
				<ShoppingCartContextProvider>
					<Router />
				</ShoppingCartContextProvider>
			</BrowserRouter>

			<GlobalStyle />
		</ThemeProvider>
	);
}

export default App;
