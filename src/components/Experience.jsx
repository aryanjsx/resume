import resume from "../data/resume";

function Experience() {
  return (
    <section className="resume-section experience-section">
      <h2 className="section-title">WORK EXPERIENCE</h2>

      {resume.experience.map((job) => (
        <article className="experience-entry" key={`${job.company}-${job.role}`}>
          <div className="experience-title">
            <h3 className="job-role">{job.role}</h3>
          </div>

          <div className="experience-meta">
            <span className="company-name">
              {job.company}, {job.location}
            </span>

            <span className="job-duration">
              {job.duration}
            </span>
          </div>

          <ul className="experience-bullets">
            {job.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Experience;