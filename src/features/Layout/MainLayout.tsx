import { Button } from "@blueprintjs/core";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useIsMobile } from "../../Hooks/mobile/useIsMobile";
import { HamburgerMenu } from "../../components/HamburgerMenu/HamburgerMenu";
import { LoginSwitch } from "./LoginSwitch";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
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
