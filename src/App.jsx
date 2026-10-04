import Resume from "./components/Resume";
import "./styles/resume.css";

function App() {
  const downloadResume = () => {
    window.print();
  };

  return (
    <>
      <div className="resume-actions">
        <button
          type="button"
          className="download-button"
          onClick={downloadResume}
        >
          Download PDF
        </button>
      </div>

      <Resume />
    </>
  );
}

export default App;