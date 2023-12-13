import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './shared/styles/GlobalStyles';
import { darkTheme } from './shared/styles/theme/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
