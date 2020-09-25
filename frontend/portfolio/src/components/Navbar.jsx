import React, { useState } from "react";
import styled, { css } from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import LibraryBooksOutlinedIcon from "@material-ui/icons/LibraryBooksOutlined";
import PermContactCalendarOutlinedIcon from "@material-ui/icons/PermContactCalendarOutlined";

const Nav = styled.nav`
  background: ${({ theme }) => theme.darkTransparent};
  color: white;
  font-weight: bolder;
  box-shadow: 0px 1.5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  padding: 5px;
  height: 60px;
  padding-top: 20px;
  margin-bottom: 5px;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: background 0.5s ease-in-out;
`;

const Menu = styled("ul")`
  display: flex;
  list-style: none;
  justify-content: space-evenly;

  & li {
    margin-left: 20px;
    transition: 1s background cubic-bezier(0.175, 0.885, 0.32, 1.275),
      1s border-radius cubic-bezier(0.175, 0.885, 0.32, 1.275);

    & a {
      text-decoration: none;
      color: inherit;
      font-size: 1.2em;
      padding: 2em 1em;
      cursor: pointer;
    }

    &:hover {
      color: white;
      background: ${({ theme }) => theme.colorAccent};
      border-radius: 5px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    & li {
      margin-bottom: 20px;
      border-color: ${({ theme }) => theme.blackWhite};
      border-bottom: 0.1px solid;
      padding-bottom: 10px;
      border-radius: 5px;

      & a {
        text-decoration: none;
        color: ${({ theme }) => theme.blackWhite};
      }
    }
  }
`;

const MenuContainer = styled("div")`
  right: 30px;
  width: 50%;
  margin: auto;

  @media (max-width: 768px) {
    right: 5px;
    padding-right: 30px;
    padding-top: 20px;
    margin-top: 41px;
    width: 60%;
    background: ${({ theme }) => theme.cardBackground};
    box-shadow: 0px 1.5px 5px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    height: 300px;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

    ${(props) =>
      props.expanded &&
      css`
        height: 0px;
        padding: 0px;
      `};
  }
`;

const HamburgerIcon = styled("div")`
  position: absolute;
  right: 20px;

  @media (min-width: 768px) {
    display: none;
  }

  & div {
    height: 3px;
    width: 25px;
    background: ${({ theme }) => theme.text};
    margin-top: 3px;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  & .line1 {
    width: 20px;

    ${(props) =>
      props.rotated &&
      css`
        transform: rotate(-45deg);
      `};
  }

  & .line3 {
    width: 20px;

    ${(props) =>
      props.rotated &&
      css`
        transform: rotate(45deg);
      `};
  }

  & .line2 {
    width: 20px;

    ${(props) =>
      props.rotated &&
      css`
        opacity: 0;
      `};
  }
`;

const BrandLink = styled.a`
  margin: 5px 10px;
  color: inherit;
  text-decoration: none;
  font-family: "Arizonia", cursive;
`;

const Navbar = () => {
  const [expanded, setExpanded] = useState(true);
  const [rotated, setRotated] = useState(false);

  const navToggler = () => {
    expanded === false ? setExpanded(true) : setExpanded(false);
    rotated === false ? setRotated(true) : setRotated(false);
  };

  return (
    <Nav>
      <BrandLink href="/" className="brand">
        HRD
      </BrandLink>
      <MenuContainer expanded={expanded}>
        <Menu>
          <li id="nav_about">
            <a>
              <InfoOutlinedIcon className="m-only ml-10" /> About
            </a>
          </li>
          <li>
            <a id="nav_services">
              <WorkOutlineOutlinedIcon className="m-only ml-10" />
              Services
            </a>
          </li>
          <li>
            <a id="nav_portfolio">
              <LibraryBooksOutlinedIcon className="m-only ml-10" />
              Portfolio
            </a>
          </li>
          <li>
            <a id="nav_contact">
              <PermContactCalendarOutlinedIcon className="m-only ml-10" />
              Contact
            </a>
          </li>
        </Menu>
      </MenuContainer>

      <HamburgerIcon onClick={navToggler} rotated={rotated}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </HamburgerIcon>
    </Nav>
  );
};
export default Navbar;
