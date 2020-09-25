import React from "react";
import styled from "styled-components";
import bg from "./images/bg.jpg";
import { useSelector } from "react-redux";

const Container = styled.div`
  background: ${({ theme }) => theme.wrapper}, url(${bg});
  color: ${({ theme }) => theme.text};
  font-weight: bolder;
  padding: 5px;
  padding-top: 0px;
  position: absolute;
  width: 100vw;
  top: 0px;
  height: 100vh;
  padding: 30px;
  background-size: cover;
`;

const HomeCard = styled.div`
  padding: 20px;
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  width: 60%;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 30px;
  color: ${({ theme }) => theme.gray};
  font-weight: 100;
  display: flex;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.cardBackground};
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  & p {
    /* font-family: "Arizonia", cursive; */
    font-size: 1.5em;
    font-family: "Alex Brush", cursive;
    color: ${({ theme }) => theme.blackWhite};
    margin: 2px 10px;
  }
`;

const IntroDiv = styled.div`
  margin: 20vh 0px 10px 0px;
`;

const StyledButton = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.text};
  margin-right: 20px;
  font-size: 1em;
  margin: 1em 0em;
  padding: 10px;
  background: ${({ theme }) => theme.darkTransparent};
  outline: none;
  border: 2px solid ${({ theme }) => theme.colorAccent};
  border-radius: 10px;
  width: 150px;
  box-shadow: 0px 0px 5px rgba(255, 0, 179, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-right: 10px;

  &:hover {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.colorAccent};
    box-shadow: 0px 0px 10px rgba(255, 0, 179, 0.4);
  }
`;

function createMarkup(html) {
  return { __html: html };
}

const IntroContainer = () => {
  const developers = useSelector((state) => state.portfolio.developer);
  let developer = null;
  if (developers.length > 0) {
    developer = developers[0];
  }

  return (
    <Container id="intro_container">
      <IntroDiv
        dangerouslySetInnerHTML={createMarkup(developer?.intro)}
      ></IntroDiv>

      <a id="portfolio_btn">
        <StyledButton>portfolio</StyledButton>
      </a>

      <a id="contact_me_btn">
        <StyledButton>contact</StyledButton>
      </a>

      <HomeCard>
        <p>Python/Django</p>
        <p>Java/Android</p>
        <p>Javascript/React</p>
        <p>C/C++</p>
        <p>Git</p>
      </HomeCard>
    </Container>
  );
};

export default IntroContainer;
