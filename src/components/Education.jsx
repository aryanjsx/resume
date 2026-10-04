import resume from "../data/resume";

function Education() {
  const { education } = resume;

  return (
    <section className="resume-section education-section">
      <h2 className="section-title">EDUCATION</h2>

      <div className="education-entry">
        <div className="education-header">
          <span className="education-institution">
            {education.institution}
          </span>

          <span className="education-duration">
            {education.duration}
          </span>
        </div>

        <div className="education-details">
          <span>{education.degree}</span>
          <span> | CGPA – {education.cgpa}</span>
        </div>
      </div>
    </section>
  );
}

export default Education;