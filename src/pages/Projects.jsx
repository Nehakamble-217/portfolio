import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import tce from "../assets/projects/tce.png"
import socialmedia from "../assets/projects/ff.png"
import ecommerce from "../assets/projects/ep.png";
import translator from "../assets/projects/prhp.png"
import piano from "../assets/projects/piano.png"
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tce}
              isBlog={false}
              title="Weather App"
              description="This Weather App is a responsive and user-friendly application built with React. It fetches real-time weather data using APIs like OpenWeatherMap and displays temperature, conditions, humidity, wind speed, and more based on the user's input or current location. The app uses React hooks for state management and handles API calls efficiently with async/await. It includes dynamic icons, conditional rendering for different weather types, and clean UI styling for a modern experience."
              ghLink="https://github.com/Nehakamble-217/Weather-Application--ReactJS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={socialmedia}
              isBlog={false}
              title="Social Media"
              description="This Social Media App is developed using Django, a powerful Python web framework. It allows users to register, create profiles, post updates, like and comment on posts, and follow other users. The backend handles user authentication, database management, and API endpoints, while templates render dynamic content. It features a clean UI, secure login system, and scalable structure for handling media uploads, notifications, and user interactions."
              // ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://github.com/Nehakamble-217/Ecommerce-Website"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={translator}
              isBlog={false}
              title="Translator"
              description="This Translator App is built using React and integrates with translation APIs like Google Translate or LibreTranslate. Users can input text, select source and target languages, and get real-time translations instantly. The app features a clean, responsive UI, language dropdowns, and clipboard copy functionality. React hooks manage state and API calls efficiently, providing a smooth and interactive user experience."
              // ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={piano}
              isBlog={false}
              title="Piano"
              description="This Piano App is created using basic HTML and CSS to simulate a simple, interactive piano layout. Each key is styled with CSS to resemble real piano keys, providing a visually appealing interface. While it doesn’t produce sound on its own, it serves as a great front-end structure that can later be enhanced with JavaScript for sound functionality and interactivity."
              ghLink="https://github.com/Nehakamble-217/Piano---HTML"
              demoLink="https://sensational-baklava-14df14.netlify.app/"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  )
}

export default Projects