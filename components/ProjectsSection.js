import SectionTitle from "./SectionTitle";
import SectionParagraph from "./SectionParagraph";
import ProjectItems from "./ProjectItems";
import project1 from "../public/project-1.png";
import project2 from "../public/project-2.png";
import project3 from "../public/project-3.png";
import project4 from "../public/project-4.png";

export default function ProjectsSection() {
  return (
    <section className="py-28" id="projects">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>Projects</SectionTitle>
        <SectionParagraph>Some of my projects</SectionParagraph>
        <div className="flex -mx-4 mt-20 flex-wrap">
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItems
              image={project1}
              name="Dicurre React Web"
              desc="A website for transferring money to anyone you connected. The website is made using React.js as a framework and CSS/Bootstrap for the styling, Redux as state management."
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItems
              image={project2}
              name="Dicurre React Native (Mobile App)"
              desc="A mobile application for transferring money to anyone you connected. The application is made using React Native as a framework for mobile platform (Android and IOS) and StyleSheet for the styling and all the styles are converted to variable."
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
            <ProjectItems
              image={project3}
              name="Dicurre Backend (eWallet Project)"
              desc="A backend program for Dicurre website and application, using Express and Node Js for the framework and PostgreSQL for the database, CDN for media management. An e-wallet website and application to transfer money to anyone you connected."
            />
          </div>
          <div className="md:w-6/12 w-full px-4 pb-8">
            <ProjectItems
              image={project4}
              name="Cuaca (Weather App)"
              desc="A website for instantly access forecasts weather in a city around the world, using OpenWeather API"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
