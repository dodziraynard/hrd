import React from "react";
import styled from "styled-components";

const Div = styled("div")`
  text-align: center;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.colorAccent};
  width: 200px;
  height: 40px;
  margin: 0px auto;
  padding: 5px;
  font-weight: 600;
  font-size: 1.3em;
  border-bottom: 1px solid gray;
`;

const Header = ({ text }) => {
  return <Div>{text}</Div>;
};
export default Header;
