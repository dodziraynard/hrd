import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getDeveloper } from "../actions/portfolio";
import Header from "./Header";

const Div = styled("div")`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.blackWhite};
  width: ${({ theme }) => theme.mdCardsize};
  margin: 100vh auto 10px auto;
  position: relative;
  padding: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 95%;
  }

  &:hover {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  }
`;

const Body = styled("div")`
  text-align: justify;
  padding: 5px;
  margin: 50px auto;

  & quote {
    line-height: 1.5em;
  }
`;

const Resume = styled("p")`
  text-align: right;
  padding: 5px;

  & a {
    color: ${({ theme }) => theme.colorLink};
    text-decoration: none;
  }
`;
function createMarkup(html) {
  return { __html: html };
}

const About = () => {
  const developers = useSelector((state) => state.portfolio.developer);
  let developer = null;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeveloper());
  }, []);

  if (developers.length > 0) {
    developer = developers[0];
  }

  return (
    <Div id="about">
      <Header text={"About"}></Header>
      <Body>
        <p dangerouslySetInnerHTML={createMarkup(developer?.about)}></p>
      </Body>
      <Resume>
        <a href={developer?.resume} download>
          Get CV
        </a>
      </Resume>
    </Div>
  );
};
export default About;
