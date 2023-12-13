import ToDoList from '../components/toDoList';
import ToDoForm from '../components/toDoForm';
import * as St from './home.styled';
import Header from '../shared/header';

export const Home = () => {
  return (
    <St.HomeWrapper>
      <Header />
      <ToDoForm />
      <ToDoList />
    </St.HomeWrapper>
  );
};
