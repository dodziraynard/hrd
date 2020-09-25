import React from "react";
import styled from "styled-components";

const Div = styled("div")`
  min-height: 100px;
  background: green;
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  background-color: ${({ theme }) => theme.cardBackground};
  color: gray;

  & a {
    color: ${({ theme }) => theme.colorLink};
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <Div>
      <p>
        <a href="/">Home</a>
      </p>

      <p>Site with Django, React, and Redux.</p>
      <p>
        <a href="mailto:dodzireynard@gmail.com">Email me to ask anything.</a>
      </p>
      <p>&copy; {new Date().getFullYear()}</p>
    </Div>
  );
};
export default Footer;
