import Header from "./Header";
import Summary from "./Summary";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";

function Resume() {
  return (
    <main className="resume" id="resume">
      <Header />

      <Summary />

      <Education />

      <Skills />

      <Experience />

      <Projects />
    </main>
  );
}

export default Resume;