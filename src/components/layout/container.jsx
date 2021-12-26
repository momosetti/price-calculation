import React from "react";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  max-width: 1085px;
`;

export default function Container({ children }) {
  return <ContainerWrapper>{children}</ContainerWrapper>;
}
