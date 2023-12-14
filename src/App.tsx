import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './shared/styles/GlobalStyles';
import { Home } from './pages/Home';
import { useSelector } from 'react-redux';
import { selectorTheme } from './redux/module/theme.slice';
import { darkTheme, lightTheme } from './shared/styles/theme/theme';
import CustomModal from './components/customModal';
import LoadingModal from './components/loadingModal';

function App() {
  const { theme } = useSelector(selectorTheme);
  return (
    <>
      <ThemeProvider theme={theme === 'darkTheme' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Home />
        <CustomModal />
        <LoadingModal />
      </ThemeProvider>
    </>
  );
}

export default App;
