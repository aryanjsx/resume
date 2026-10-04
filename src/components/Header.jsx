import resume from "../data/resume";

function Header() {
  const { personal } = resume;

  return (
    <header className="resume-header">
      <h1 className="resume-name">{personal.name}</h1>

      <div className="contact-info">
        <span>{personal.phone}</span>
        <span>{personal.email}</span>

        <a
          href={personal.linkedinUrl}
          target="_blank"
          rel="noreferrer"
        >
          {personal.linkedin}
        </a>

        <a
          href={personal.portfolioUrl}
          target="_blank"
          rel="noreferrer"
        >
          {personal.portfolio}
        </a>
      </div>
    </header>
  );
}

export default Header;