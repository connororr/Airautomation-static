import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: PT Sans, sans-serif;
  overflow-x: hidden;
`;

const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;
export default Layout;