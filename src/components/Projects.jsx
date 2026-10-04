import resume from "../data/resume";

function Projects() {
  return (
    <section className="resume-section projects-section">
      <h2 className="section-title">PROJECTS</h2>

      {resume.projects.map((project) => (
        <article className="project-entry" key={project.name}>
          <h3 className="project-name">{project.name}</h3>

          <ul className="project-bullets">
            {project.description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Projects;