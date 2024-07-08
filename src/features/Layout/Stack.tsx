import React from "react";
import styled from "styled-components";

export const Stack = ({ children }: { children: React.ReactNode }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

const StyledDiv = styled.div`
  * > * {
    margin-bottom: 5px;
  }
`;
