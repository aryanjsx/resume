import resume from "../data/resume";

function Summary() {
  return (
    <section className="resume-section summary-section">
      <h2 className="section-title">Professional Summary</h2>

      <p className="summary-text">{resume.summary}</p>
    </section>
  );
}

export default Summary;