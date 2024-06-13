import React from "react";
import "./portfolio.css";
import RegistrationForm from "../../assets/RegistrationForm.PNG";
import PortfolioImage from "../../assets/portfolio.png";
import WeatherApp from "../../assets/WeatherApp.PNG";


const data = [
  {
    id: 1,
    image: RegistrationForm,
    title: "Registration-form",
    github: "https://github.com/prachityagi13/Registration-form",
    description: "Responsive registration form",
    demo: "https://prachityagi13.github.io/Registration-form/",
  },
  {
    id: 2,
    image: PortfolioImage,
    title: "Portfolio",
    github: "https://github.com/anmoljainn/My-Portfolio.git",
    description: "Responsive Portfolio",
    demo: "https://anmoljain-portfolio.netlify.app/",
  },
  {
    id: 3,
    image: WeatherApp,
    title: "Weather-App",
    github: "https://github.com/prachityagi13/Weather-app",
    description: "Weather App Website",
    demo: "https://prachityagi13.github.io/Weather-app/",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, description, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{description}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} classsName="btn" target="__blank">
                    Github
                  </a>
                  <a href={demo} classsName="btn btn-primary" target="__blank">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
