import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, ContentWrapper } from "./Layout.styled";
import {Header} from '../Header/Header'


const Layout = () => {
  return (
    <ContentWrapper>
      <Header />
      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </ContentWrapper>
  );
};

export default Layout;




