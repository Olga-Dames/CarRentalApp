import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ContentWrapper } from "./Layout.styled";
import {Header} from '../Header/Header'


const Layout = () => {
  return (
    <ContentWrapper>
      <Header />
      <div>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </ContentWrapper>
  );
};

export default Layout;




