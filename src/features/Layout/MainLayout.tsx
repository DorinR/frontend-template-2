import { ReaderIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { HamburgerMenu } from "../../components/HamburgerMenu/HamburgerMenu";
import { AuthStateContext } from "../../context/AuthStateContext";
import { useUserData } from "../../hooks/auth/useUserData";
import { useIsMobile } from "../../hooks/mobile/useIsMobile";
import { LoginSwitch } from "./LoginSwitch";

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
        <ApplicationHeader></ApplicationHeader>
        <ResponsiveNavbar>
          <StyledSpan>
            {/* <Link to="/">
              <Button variant="soft">
                <HomeIcon />
                Home
              </Button>
            </Link> */}
            <Link to="/journal">
              <Button variant="soft" disabled={!token}>
                <ReaderIcon />
                Journal
              </Button>
            </Link>
          </StyledSpan>
          <span>
            <LoginSwitch />
          </span>
        </ResponsiveNavbar>
        <MainContentLayout>{children}</MainContentLayout>
        <ApplicationFooter></ApplicationFooter>
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

const StyledSpan = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const ApplicationHeader = styled.div`
  height: 80px;
`;

const ApplicationFooter = styled.div`
  height: 80px;
`;

const NavbarContainer = styled.div<{ isMobile: boolean }>`
  margin-bottom: 80px;
  display: flex;
  justify-content: ${(props) =>
    props.isMobile ? "flex-end" : "space-between"};
`;

const ApplicationRootDiv = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 0 50px;
`;

const MainContentLayout = styled.div`
  padding: 0 15px;
`;
