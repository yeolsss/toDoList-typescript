import { CiDark, CiLight } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { selectorTheme, toggleTheme } from '../../redux/module/theme.slice';
import * as St from './header.styled';

const Header = () => {
  const { theme } = useSelector(selectorTheme);
  const dispatch = useDispatch();
  const handleOnClickTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <St.Header>
      <h1>Level 5 ToDo List</h1>
      <div>
        <h2>React</h2>
        <button onClick={handleOnClickTheme}>
          {theme === 'darkTheme' ? <CiDark /> : <CiLight />}
        </button>
      </div>
    </St.Header>
  );
};

export default Header;
