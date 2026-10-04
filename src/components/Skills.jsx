import resume from "../data/resume";

function Skills() {
  return (
    <section className="resume-section skills-section">
      <h2 className="section-title">
        TECHNICAL SKILLS &amp; CERTIFICATIONS
      </h2>

      <div className="skills-list">
        {resume.skills.map((skill) => (
          <div className="skill-row" key={skill.category}>
            <span className="skill-category">
              ● {skill.category}:
            </span>

            <span className="skill-technologies">
              {skill.technologies.join(", ")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;