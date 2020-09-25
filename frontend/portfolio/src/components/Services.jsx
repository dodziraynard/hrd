import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getSkills } from "../actions/portfolio";
import Header from "./Header";

const Div = styled("div")`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.blackWhite};
  width: ${({ theme }) => theme.mdCardsize};
  margin: 20px auto;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  & quote {
    line-height: 1.5em;
  }
`;

const Service = styled("div")`
  background-color: ${({ theme }) => theme.cardBackground};
  width: 250px;
  height: 300px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
  transition: 1s all cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;

  & div {
    color: white;
    position: absolute;
    bottom: -40px;
    width: inherit;
    transition: 1s all cubic-bezier(0.165, 0.84, 0.44, 1);
    padding: 5px;
    background-color: ${({ theme }) => theme.darkTransparent};
    opacity: 0.6;
  }

  &:hover {
    background-position: 0% 50%;
    transform: scale(1.02);

    & div {
      padding-bottom: 10%;
      opacity: 1;
      bottom: 0%;
    }
  }
`;

function createMarkup(html) {
  return { __html: html };
}

const Services = () => {
  const skills = useSelector((state) => state.portfolio.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSkills());
  }, []);

  return (
    <Div id="services">
      <Header text={"Services"}></Header>
      <Body>
        {skills.map((skill) => (
          <Service
            key={skill.id}
            s
            style={{ backgroundImage: `url(${skill.image})` }}
          >
            <div>
              <h3>{skill.name}</h3>
              <br />
              <p dangerouslySetInnerHTML={createMarkup(skill.description)}></p>
            </div>
          </Service>
        ))}
      </Body>
    </Div>
  );
};
export default Services;
