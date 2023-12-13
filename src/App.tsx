import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './shared/styles/GlobalStyles';
import { darkTheme, lightTheme } from './shared/styles/theme/theme';
import { Home } from './pages/Home.tsx';
import { useSelector } from 'react-redux';
import { selectorTheme } from './redux/module/theme.slice.ts';

function App() {
  const { theme } = useSelector(selectorTheme);
  return (
    <>
      <ThemeProvider theme={theme === 'darkTheme' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
