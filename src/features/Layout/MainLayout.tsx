import { Button } from "@blueprintjs/core";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIsMobile } from "../../hooks/mobile/useIsMobile";
import { HamburgerMenu } from "../../components/HamburgerMenu/HamburgerMenu";
import { LoginSwitch } from "./LoginSwitch";
import { AuthStateContext } from "../../context/AuthStateContext";
import { useUserData } from "../../hooks/auth/useUserData";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { token, setToken, clearToken } = useUserData();

  return (
    <AuthStateContext.Provider
      value={{
        token: token,
        setToken: setToken,
        clearToken: clearToken,
      }}
    >
      <ApplicationRootDiv className="application-root-div">
        <ResponsiveNavbar>
          <span>
            <Link to="/">
              <Button icon="home" minimal large>
                Home
              </Button>
            </Link>
            <Link to="/reminders">
              <Button icon="add" minimal large>
                Reminders
              </Button>
            </Link>
          </span>
          <span>
            <LoginSwitch />
          </span>
        </ResponsiveNavbar>
        <MainContentLayout>{children}</MainContentLayout>
      </ApplicationRootDiv>
    </AuthStateContext.Provider>
  );
};

const ResponsiveNavbar = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useIsMobile();
  let menuOptions: null | React.ReactNode;

  if (isMobile) {
    menuOptions = <HamburgerMenu>{children}</HamburgerMenu>;
  } else {
    menuOptions = children;
  }

  return (
    <NavbarContainer className="navbar-container" isMobile={isMobile}>
      {menuOptions}
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div<{ isMobile: boolean }>`
  margin-bottom: 80px;
  display: flex;
  justify-content: ${(props) =>
    props.isMobile ? "flex-end" : "space-between"};
`;

const ApplicationRootDiv = styled.div`
  max-width: 900px;
  margin: auto;
  margin-top: 50px;
`;

const MainContentLayout = styled.div`
  padding: 0 15px;
`;
