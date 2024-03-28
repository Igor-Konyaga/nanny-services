import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

export const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
