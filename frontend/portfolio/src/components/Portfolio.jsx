import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProjects } from "../actions/portfolio";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DescriptionIcon from "@material-ui/icons/Description";
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

  &:hover {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 95%;
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

const Project = styled("div")`
  background-color: ${({ theme }) => theme.cardBackground};
  width: 250px;
  height: 300px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  transition: 0.5s all cubic-bezier(0.165, 0.84, 0.44, 1);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  margin-top: 20px;

  & div {
    color: white;
    position: absolute;
    bottom: -40%;
    width: inherit;
    transition: 0.5s all cubic-bezier(0.165, 0.84, 0.44, 1);
    padding: 5px;
    background-color: ${({ theme }) => theme.darkTransparent};
    opacity: 0.2;
  }

  &:hover {
    background-position: 0% 20%;
    transform: scale(1.02);

    & div {
      padding-bottom: 10%;
      opacity: 1;
      bottom: 0%;
    }
  }
`;

const ProjectActions = styled.section`
  padding: 5px;
  margin: 5px auto;
  width: 80%;
  display: flex;
  justify-content: space-evenly;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const Portfolio = () => {
  const projects = useSelector((state) => state.portfolio.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjects());
  }, []);

  return (
    <Div id="portfolio">
      <Header text={"Portfolio"}></Header>
      <Body>
        {projects.map((project) => (
          <a href={`/details/${project.id}`}>
            <Project
              key={project.id}
              style={{ backgroundImage: `url(${project.icon})` }}
            >
              <div>
                <h3>{project.name}</h3>
                <ProjectActions>
                  <a href={`/details/${project.id}`}>
                    <DescriptionIcon></DescriptionIcon>
                  </a>
                  {project.git_link != null ? (
                    <a
                      href={project.git_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon></GitHubIcon>
                    </a>
                  ) : (
                    ""
                  )}

                  {project.live_link != null ? (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <VisibilityIcon></VisibilityIcon>
                    </a>
                  ) : (
                    ""
                  )}
                </ProjectActions>
              </div>
            </Project>
          </a>
        ))}
      </Body>
    </Div>
  );
};
export default Portfolio;
