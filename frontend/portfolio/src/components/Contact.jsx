import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import GitHubIcon from "@material-ui/icons/GitHub";
import SendIcon from "@material-ui/icons/Send";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WebIcon from "@material-ui/icons/Web";
import Header from "./Header";

const Div = styled("div")`
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.blackWhite};
  width: ${({ theme }) => theme.mdCardsize};
  margin: 10px auto;
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
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 5px;

  & a {
    color: inherit;
    text-decoration: none;
  }
`;

const Card = styled.div`
  min-width: 200px;
  height: 100px;
  margin: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.cardBackground};
  text-align: center;
  color: ${({ theme }) => theme.blackWhite};
  padding: 20px 10px;
  border-radius: 10px;
`;

const CardIcon = styled.div`
  color: ${({ theme }) => theme.colorAccent};
`;

const Form = styled.form`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  input,
  textarea {
    margin-top: 20px;
    padding: 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid grey;
    background-color: ${({ theme }) => theme.cardBackground};
    transition: 0.5s all ease-in-out;
    color: ${({ theme }) => theme.blackWhite};
  }

  input {
    width: 100%;

    @media (max-width: 768px) {
      width: 80%;
    }
  }

  textarea {
    min-height: 100px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  }

  input:focus,
  textarea:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colorAccent};
  }
`;

const SubmitButton = styled.button`
  width: 200px;
  margin-top: 30px;
  margin-left: auto;
  background-color: ${({ theme }) => theme.colorAccent};
  color: white;
  padding: 10px;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 1.05em;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: center;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Contact = () => {
  const developers = useSelector((state) => state.portfolio.developer);
  let developer = null;

  if (developers.length > 0) {
    developer = developers[0];
  }

  return (
    <Div id="contact">
      <Header text={"Contact"}></Header>
      <Body>
        <FlexContainer>
          <Card>
            <CardIcon>
              <CallIcon></CallIcon>
            </CardIcon>
            <h4>PHONE:</h4>
            <h5>{developer?.phone}</h5>
          </Card>

          <Card>
            <CardIcon>
              <EmailIcon></EmailIcon>
            </CardIcon>
            <h4>EMAIL:</h4>
            <h5>{developer?.email}</h5>
          </Card>

          <Card>
            <CardIcon>
              <WebIcon></WebIcon>
            </CardIcon>
            <h4>SOCIAL MEDIA:</h4>
            <FlexContainer>
              <a
                href={developer?.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon></GitHubIcon>
              </a>
              <a
                href={developer?.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon></LinkedInIcon>
              </a>
              <a href={developer?.fb} target="_blank" rel="noopener noreferrer">
                <FacebookIcon></FacebookIcon>
              </a>
            </FlexContainer>
          </Card>
        </FlexContainer>

        <Form
          action={`${process.env.REACT_APP_DOMAIN_NAME}/message/`}
          method="POST"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            required
          ></input>
          <input type="email" name="email" placeholder="Email *"></input>
          <textarea
            name="message"
            placeholder="Your message *"
            required
          ></textarea>
          <SubmitButton type="submit">
            <SendIcon></SendIcon>
            <span>Send Message</span>
          </SubmitButton>
        </Form>
      </Body>
    </Div>
  );
};
export default Contact;
