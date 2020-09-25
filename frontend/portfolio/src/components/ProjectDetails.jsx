import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { getProject } from "../actions/portfolio";
import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";

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

const Header = styled("div")`
  text-align: center;
  border-bottom-right-radius: 100px;
  border-bottom-left-radius: 100px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.colorAccent};
  min-width: 200px;
  max-width: ${({ theme }) => theme.mdCardsize};
  min-height: 40px;
  margin: 0px auto;
  padding: 5px;
  font-weight: 600;
  font-size: 1.3em;
  border-bottom: 1px solid gray;
`;

const Body = styled("div")`
  text-align: justify;
  padding: 5px;
  margin: 50px auto;
`;

const ProjectLinks = styled("div")`
  text-align: justify;
  padding: 5px;
  margin: 5px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-top: 1px solid gray;

  a {
    margin: 10px;
    color: ${({ theme }) => theme.blackWhite};
    text-decoration: none;
  }
`;

const Images = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & img {
    height: 200px;
    margin: 20px;
    transition: all 0.2s ease-in-out;
    z-index: 100;
  }
`;

function createMarkup(html) {
  return { __html: html };
}

const ProjectDetails = (props) => {
  const project = useSelector((state) => state.portfolio.currentProject);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProject(props.match.params.id));
  }, []);

  return (
    <Div>
      <Header>{project?.name}</Header>
      <Body>
        <Images>
          {project?.images.map((image) => (
            <a key={image.id} href={image.file}>
              <img src={image.file} alt="screenshots" />
            </a>
          ))}
        </Images>

        <div dangerouslySetInnerHTML={createMarkup(project?.description)}></div>
      </Body>

      <ProjectLinks>
        {project?.git_link != null ? (
          <a href={project?.git_link} target="_blank" rel="noopener noreferrer">
            <GitHubIcon></GitHubIcon> GitHub
          </a>
        ) : (
          ""
        )}{" "}
        {project?.live_link != null ? (
          <a
            href={project?.live_link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <VisibilityIcon></VisibilityIcon> View Project
          </a>
        ) : (
          ""
        )}
      </ProjectLinks>
    </Div>
  );
};
export default ProjectDetails;
