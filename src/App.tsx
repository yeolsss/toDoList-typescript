import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './shared/styles/GlobalStyles';
import { Home } from './pages/Home.tsx';
import { useSelector } from 'react-redux';
import { selectorTheme } from './redux/module/theme.slice.ts';
import { darkTheme, lightTheme } from './shared/styles/theme/theme.ts';
import CustomModal from './components/customModal';

function App() {
  const { theme } = useSelector(selectorTheme);
  return (
    <>
      <ThemeProvider theme={theme === 'darkTheme' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Home />
        <CustomModal />
      </ThemeProvider>
    </>
  );
}

export default App;
