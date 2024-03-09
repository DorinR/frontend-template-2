import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@blueprintjs/core";
import styled from "styled-components";
import { LoginSwitch } from "./LoginSwitch";
import { HamburgerMenu } from "../../components/HamburgerMenu/HamburgerMenu";
import { useIsMobile } from "../../Hooks/mobile/useIsMobile";
import {
  DropdownNavbarButton,
  NavbarDropdownOption,
} from "./DropdownNavbarButton";

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
          <Link to="/appointments">
            <Button icon="calendar" minimal large>
              Appointments
            </Button>
          </Link>
          <DropdownNavbarButton label="Dropdown menu">
            <NavbarDropdownOption label="Icon Bar" to="/ui/icon-bar" />
            <NavbarDropdownOption label="Accordion" to="/ui/accordion" />
            <NavbarDropdownOption label="Tabs" to="/ui/tabs" />
            <NavbarDropdownOption
              label="Full Screen Overlay"
              to="/ui/full-screen-overlay"
            />
            <NavbarDropdownOption label="Card" to="/ui/card" />
            <NavbarDropdownOption label="Kanban Board" to="/ui/kanban-board" />
            <NavbarDropdownOption
              label="ThreeColorSquare"
              to="/ui/three-color-square"
            />
            <NavbarDropdownOption
              label="Comments Section"
              to="/ui/comments-section"
            />
          </DropdownNavbarButton>
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
  let menuOptions = null;

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
  padding: 0px 15px;
`;
