import React, { Fragment, useEffect } from "react";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import IntroContainer from "./IntroContainer";

function smoothScroll(element, duration) {
  var target = document.querySelector(element);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  // var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;

    var run = ease(timeElapsed, startPosition, targetPosition - 90, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}

const Home = () => {
  useEffect(() => {
    var about = document.querySelector("#nav_about");
    var services = document.querySelector("#nav_services");
    var portfolio = document.querySelector("#nav_portfolio");
    var contact = document.querySelector("#nav_contact");
    var contactBtn = document.querySelector("#contact_me_btn");
    var portfolioBtn = document.querySelector("#portfolio_btn");

    about.addEventListener("click", () => {
      smoothScroll("#about", 1000);
    });

    services.addEventListener("click", () => {
      smoothScroll("#services", 1000);
    });

    portfolio.addEventListener("click", () => {
      smoothScroll("#portfolio", 1000);
    });

    contact.addEventListener("click", () => {
      smoothScroll("#contact", 1000);
    });

    contactBtn.addEventListener("click", () => {
      smoothScroll("#contact", 1000);
    });

    portfolioBtn.addEventListener("click", () => {
      smoothScroll("#portfolio", 1000);
    });
  }, []);

  return (
    <Fragment>
      <IntroContainer />
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </Fragment>
  );
};
export default Home;
