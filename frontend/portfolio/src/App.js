import React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import ProjectDetails from "./components/ProjectDetails"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { useDarkMode } from "./components/UseDarkMode"
import { lightTheme, darkTheme } from "./components/Theme"
import Footer from "./components/Footer";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import styled from "styled-components";


const ThemeToggler = styled("span")`
  position: fixed; 
  z-index: 13;
  top: 10px;
  cursor: pointer;
  right: 50px;
  color: inherit;
`;

function App() {
  const [theme, toggleTheme] = useDarkMode();

  document.addEventListener("scroll", (e) => {
    const theme = window.localStorage.getItem('theme');

    if (window.innerHeight / 5 < window.pageYOffset) {
      if (theme === "light") {
        document.querySelector("nav").style.background = "white";
        document.querySelector("nav").style.color = "black";
        document.querySelector("span").style.color = "#121212";
      } else {
        document.querySelector("nav").style.background = "#121212";
        document.querySelector("span").style.color = "#fff";
      }

    } else {
      document.querySelector("nav").style.background = "#00000033";
      document.querySelector("nav").style.color = "white";
      document.querySelector("span").style.color = "#fff";
    }
  })

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <ThemeToggler onClick={toggleTheme}>
        {theme === "light" ? <Brightness4Icon></Brightness4Icon> : <WbSunnyIcon></WbSunnyIcon>}
      </ThemeToggler>

      <GlobalStyles />
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" component={ProjectDetails} />
        </Switch>
      </Router>

      <Footer></Footer>
    </ThemeProvider>
  );
}
export default App;