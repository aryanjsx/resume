# ATS-Friendly React Resume

A professional, ATS-friendly resume built with React, JavaScript, HTML5, and CSS3.

This project replaces the traditional Microsoft Word resume workflow with a maintainable, version-controlled web-based resume. The resume is rendered directly in the browser and can be exported as an A4 PDF using the browser's native print functionality.

The project is designed around three primary requirements:

1. Maintain a consistent resume layout.
2. Keep the resume machine-readable and ATS-friendly.
3. Make resume content easy to update without breaking the layout.

---

## Table of Contents

- [Overview](#overview)
- [Problem](#problem)
- [Solution](#solution)
- [Goals](#goals)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Resume Rendering Flow](#resume-rendering-flow)
- [Component Architecture](#component-architecture)
- [Resume Data Architecture](#resume-data-architecture)
- [Header](#header)
- [Professional Summary](#professional-summary)
- [Education](#education)
- [Technical Skills and Certifications](#technical-skills-and-certifications)
- [Work Experience](#work-experience)
- [Projects](#projects)
- [Styling Architecture](#styling-architecture)
- [A4 Layout](#a4-layout)
- [ATS-Friendly Design](#ats-friendly-design)
- [Semantic HTML](#semantic-html)
- [Keyword Strategy](#keyword-strategy)
- [Bold Formatting](#bold-formatting)
- [PDF Generation](#pdf-generation)
- [Print Styling](#print-styling)
- [Download Button](#download-button)
- [Responsive Design](#responsive-design)
- [Development Setup](#development-setup)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Updating Resume Content](#updating-resume-content)
- [Updating Contact Information](#updating-contact-information)
- [Updating Education](#updating-education)
- [Updating Skills](#updating-skills)
- [Updating Experience](#updating-experience)
- [Updating Projects](#updating-projects)
- [Customizing the Layout](#customizing-the-layout)
- [PDF Workflow](#pdf-workflow)
- [ATS Validation](#ats-validation)
- [Creating Role-Specific Versions](#creating-role-specific-versions)
- [Git Workflow](#git-workflow)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)
- [Limitations](#limitations)
- [License](#license)
- [Author](#author)

---

# Overview

This project is a React-based resume application that renders a professional resume as a web document.

Instead of maintaining the resume in Microsoft Word, resume information is stored as structured JavaScript data and rendered through reusable React components.

The visual appearance is controlled through CSS.

The same HTML document is used for:

- Browser preview
- Resume viewing
- Printing
- PDF export

This approach removes the need to manually reposition resume elements whenever content changes.

---

# Problem

Maintaining a resume in Microsoft Word can become difficult when the document is updated frequently.

Typical problems include:

- Alignment issues
- Unexpected spacing changes
- Page overflow
- Unwanted page breaks
- Inconsistent formatting
- Manual repositioning of content
- Formatting changes after editing text
- Difficulty maintaining multiple resume versions
- Additional work when exporting to PDF

For a technical resume that may need to be customized for different job descriptions, manually maintaining the document becomes inefficient.

---

# Solution

This project treats the resume as a structured web document.

The resume follows a separation-of-concerns approach:

```text
Resume Content
      |
      v
src/data/resume.js
      |
      v
React Components
      |
      v
Semantic HTML
      |
      v
CSS
      |
      +-------------------+
      |                   |
      v                   v
Browser Preview       Print CSS
                          |
                          v
                       A4 PDF
```

Resume content is stored separately from the visual layout.

React controls the document structure.

CSS controls the visual appearance and print layout.

The browser provides the rendering and PDF export mechanism.

---

# Goals

The project has the following goals:

- Recreate the existing resume as a web document.
- Maintain a consistent A4 layout.
- Keep the resume visually clean and professional.
- Keep the resume machine-readable.
- Use semantic HTML.
- Separate resume content from presentation.
- Avoid unnecessary dependencies.
- Provide a browser-based resume preview.
- Provide PDF export.
- Keep application controls out of the final PDF.
- Make resume content easy to update.
- Keep the project version-controlled.
- Make the resume deployable as a static website.
- Support future role-specific resume versions.

---

# Features

## 1. React-Based Resume

The resume is implemented as a collection of reusable React components.

Each major resume section has its own component.

Current sections include:

- Header
- Professional Summary
- Education
- Technical Skills and Certifications
- Work Experience
- Projects

---

## 2. Data-Driven Resume

Resume content is stored separately from the React components.

The primary data file is:

```text
src/data/resume.js
```

This allows content to be changed without modifying the visual structure.

---

## 3. A4 Layout

The resume is designed around the standard A4 page size:

```text
210mm × 297mm
```

The print stylesheet explicitly defines the page as A4.

---

## 4. ATS-Friendly Structure

The resume uses semantic HTML and real text.

Important resume information is not rendered as:

- Images
- Screenshots
- Canvas elements
- Graphical text
- Skill charts

---

## 5. Browser Preview

The resume is displayed directly in the browser.

This allows the user to inspect the resume before exporting it.

---

## 6. PDF Export

The application includes a `Download PDF` button.

The button triggers the browser's native print functionality.

The user can then select:

```text
Save as PDF
```

from the print dialog.

---

## 7. Print-Specific Styling

The web interface and printable resume are treated separately.

The download button is visible in the browser but hidden when printing.

---

## 8. Clickable Contact Links

LinkedIn and portfolio are represented as actual HTML hyperlinks.

The displayed text can remain concise while the underlying URL remains clickable.

---

## 9. Responsive Browser Layout

The resume is designed primarily for A4 printing, but it can also be viewed on smaller screens.

---

## 10. Version Control

The entire resume is maintained as source code and can be tracked through Git.

This makes it possible to review resume changes over time.

---

# Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based resume architecture |
| JavaScript | Resume data and application logic |
| HTML5 | Semantic document structure |
| CSS3 | Layout, typography, spacing, and print styling |
| Browser Print API | PDF export |
| Git | Version control |
| GitHub | Repository and source control |
| Vercel | Static deployment |

---

# Architecture

The application uses a simple data-driven architecture.

```text
                    +----------------------+
                    |   Resume Data        |
                    | src/data/resume.js   |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    | React Components     |
                    +----------+-----------+
                               |
          +--------------------+--------------------+
          |                    |                    |
          v                    v                    v
       Header              Sections             Projects
          |                    |                    |
          +--------------------+--------------------+
                               |
                               v
                    +----------------------+
                    |    Semantic HTML     |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    |        CSS           |
                    +----------+-----------+
                               |
                  +------------+------------+
                  |                         |
                  v                         v
          Browser Rendering            Print Styling
                                            |
                                            v
                                      +-----------+
                                      |  A4 PDF   |
                                      +-----------+
```

The project intentionally avoids unnecessary infrastructure.

The core resume does not require:

- Backend server
- Database
- Authentication
- REST API
- External PDF service

---

# Project Structure

```text
.
├── public/
│
├── src/
│   ├── components/
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Header.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx
│   │   ├── Skills.jsx
│   │   └── Summary.jsx
│   │
│   ├── data/
│   │   └── resume.js
│   │
│   ├── styles/
│   │   └── resume.css
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

# Resume Rendering Flow

The application renders the resume through the following process:

```text
resume.js
    |
    v
App.jsx
    |
    v
Resume.jsx
    |
    +---- Header.jsx
    |
    +---- Summary.jsx
    |
    +---- Education.jsx
    |
    +---- Skills.jsx
    |
    +---- Experience.jsx
    |
    +---- Projects.jsx
    |
    v
Semantic HTML
    |
    v
resume.css
    |
    +---- Screen Styles
    |
    +---- Print Styles
             |
             v
          A4 PDF
```

---

# Component Architecture

## Resume.jsx

`Resume.jsx` is the main resume container.

It assembles the individual sections:

```jsx
<main className="resume" id="resume">
  <Header />
  <Summary />
  <Education />
  <Skills />
  <Experience />
  <Projects />
</main>
```

Its responsibility is document composition rather than resume content.

---

## Header.jsx

Responsible for:

- Candidate name
- Phone number
- Email
- LinkedIn
- Portfolio

The contact information is rendered as normal HTML text.

Links are implemented using anchor elements.

---

## Summary.jsx

Responsible for the professional summary.

The summary is rendered as a standard paragraph:

```html
<section>
  <h2>PROFESSIONAL SUMMARY</h2>
  <p>...</p>
</section>
```

---

## Education.jsx

Responsible for:

- Institution
- Degree
- CGPA
- Duration

The institution and duration are aligned using CSS rather than a table.

This keeps the document structure simple.

---

## Skills.jsx

Responsible for:

- Programming
- Frontend Development
- Backend Development
- Databases
- Cloud Platforms
- DevOps and Version Control
- Web Technologies
- Certifications

Skills are represented as text rather than graphical ratings.

---

## Experience.jsx

Responsible for professional experience.

Each experience entry contains:

```text
Job Title
Company
Location
Duration
Responsibilities
```

Responsibilities are rendered as semantic list items:

```html
<ul>
  <li>...</li>
  <li>...</li>
</ul>
```

---

## Projects.jsx

Responsible for the project section.

Each project contains:

- Project name
- Project description
- Project bullet points

Project descriptions are rendered using semantic list elements.

---

# Resume Data Architecture

The resume content is stored in:

```text
src/data/resume.js
```

The primary data structure is:

```text
resume
|
+-- personal
|
+-- summary
|
+-- education
|
+-- skills
|
+-- experience
|
+-- projects
```

This structure separates content from presentation.

---

# Personal Information

Example:

```js
personal: {
  name: "Aryan Kumar",
  phone: "+91-7077196479",
  email: "kumararyan1929@gmail.com",

  linkedin: "LinkedIn",
  linkedinUrl: "https://www.linkedin.com/in/aryanjsx/",

  portfolio: "Portfolio",
  portfolioUrl: "https://aryankr.in/",
}
```

The displayed link text and actual URL are maintained separately.

This allows the resume to display:

```text
LinkedIn | Portfolio
```

while preserving clickable URLs.

---

# Professional Summary

The summary is stored as a string.

Example:

```js
summary:
  "Software Engineer with 2+ years of hands-on experience..."
```

The `Summary.jsx` component renders this value.

This means the text can be changed without modifying the component.

---

# Education

Education is represented as a structured object.

Example:

```js
education: {
  institution: "Bengal Institute of Technology, Kolkata (WB)",
  degree: "Bachelor of Technology – Information Technology",
  cgpa: "8.6",
  duration: "August 2019 - June 2023",
}
```

---

# Technical Skills and Certifications

Skills are represented as categories.

Example:

```js
skills: [
  {
    category: "Programming",
    technologies: [
      "Python",
      "Java",
      "JavaScript",
    ],
  },
  {
    category: "Frontend Development",
    technologies: [
      "React.js",
      "Hooks",
      "State Management",
      "Component Architecture",
    ],
  },
]
```

The component loops through the categories and renders each category automatically.

---

# Work Experience

Experience is represented as an array.

Example:

```js
experience: [
  {
    role: "Software Engineer",
    company: "Ltimindtree",
    location: "Hyderabad",
    duration: "Aug 2024 – Present",

    responsibilities: [
      "Developed and maintained scalable backend services...",
      "Designed and integrated RESTful APIs...",
      "Designed and maintained relational database schemas...",
    ],
  },
]
```

Additional experience entries can be added without modifying the component architecture.

---

# Projects

Projects follow a similar structure.

Example:

```js
projects: [
  {
    name: "Tourism Information Platform (Know India)",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
    ],

    description: [
      "Designed and developed a full-stack tourism information platform...",
      "Designed normalized relational database schemas...",
      "Developed and optimized RESTful APIs...",
    ],
  },
]
```

---

# Styling Architecture

Resume-specific styling is contained in:

```text
src/styles/resume.css
```

The stylesheet is responsible for:

- A4 dimensions
- Typography
- Font sizes
- Line heights
- Margins
- Padding
- Section spacing
- Alignment
- Bullets
- Links
- Browser layout
- Print layout
- Responsive behavior

The components focus on document structure while CSS controls presentation.

---

# A4 Layout

The resume uses the standard A4 page size.

```text
Width:  210mm
Height: 297mm
```

The main resume container uses:

```css
.resume {
  width: 210mm;
  min-height: 297mm;
}
```

The print page is defined as:

```css
@page {
  size: A4;
  margin: 0;
}
```

This allows the browser to treat the resume as a physical A4 document when printing.

---

# Screen Layout

On desktop screens, the resume is displayed as an A4-style document.

Conceptually:

```text
+----------------------------------+
|          Aryan Kumar             |
|                                  |
| PROFESSIONAL SUMMARY             |
| -------------------------------- |
| Summary text...                  |
|                                  |
| EDUCATION                        |
| -------------------------------- |
| Education information...         |
|                                  |
| TECHNICAL SKILLS                 |
| -------------------------------- |
| Skills...                        |
|                                  |
| WORK EXPERIENCE                  |
| -------------------------------- |
| Experience...                    |
|                                  |
| PROJECTS                         |
| -------------------------------- |
| Project...                       |
+----------------------------------+
```

The document is centered in the browser.

---

# ATS-Friendly Design

ATS compatibility is one of the primary requirements of the project.

The implementation follows common ATS-friendly principles.

However, no implementation can honestly guarantee a specific ATS score because different ATS platforms use different parsing and ranking systems.

The goal is to make the document clean, structured, and machine-readable.

---

# Semantic HTML

The resume uses semantic HTML elements:

```html
<main>
<header>
<section>
<h1>
<h2>
<h3>
<p>
<ul>
<li>
```

Example:

```html
<section>
  <h2>WORK EXPERIENCE</h2>

  <h3>Software Engineer</h3>

  <ul>
    <li>Developed and maintained scalable backend services.</li>
    <li>Designed and integrated RESTful APIs.</li>
  </ul>
</section>
```

This creates a logical document hierarchy.

---

# Real Text

Important resume information is rendered as actual HTML text.

The application does not use:

- Images containing resume text
- Screenshots
- Canvas-based resume rendering
- Text embedded in graphics

This allows users and document parsers to select and extract the text.

---

# Standard Section Headings

The resume uses recognizable section headings such as:

```text
PROFESSIONAL SUMMARY

EDUCATION

TECHNICAL SKILLS & CERTIFICATIONS

WORK EXPERIENCE

PROJECTS
```

Standard headings make the document easier to understand for both humans and automated systems.

---

# Semantic Lists

Experience and project responsibilities use semantic unordered lists:

```html
<ul>
  <li>...</li>
  <li>...</li>
</ul>
```

The visual appearance can be controlled through CSS without sacrificing the underlying structure.

---

# No Graphical Skill Ratings

The project does not use:

```text
JavaScript  █████████░ 90%
React       ████████░░ 80%
Python      █████████░ 90%
```

Skills are represented as actual text.

This keeps the document simple and avoids turning important information into graphical elements.

---

# No Important Information in Images

The following information remains text:

- Name
- Contact details
- Summary
- Education
- Skills
- Experience
- Projects
- Certifications

No important resume content depends on an image being interpreted.

---

# Single-Column Document Flow

The resume uses a straightforward document flow.

```text
Header
  |
Professional Summary
  |
Education
  |
Technical Skills & Certifications
  |
Work Experience
  |
Projects
```

This keeps the reading order predictable.

---

# Keyword Strategy

ATS optimization should focus on relevant content rather than formatting tricks.

Important factors include:

1. Relevant keywords
2. Correct technical terminology
3. Relevant experience
4. Relevant projects
5. Standard section headings
6. Machine-readable text
7. Logical document structure

For example, if a role genuinely requires:

```text
React.js
Node.js
REST APIs
Azure
Docker
Python
SQL
```

the relevant technologies should appear naturally in the resume where they accurately represent the candidate's skills and experience.

Keyword stuffing should be avoided.

---

# Bold Formatting

Bold formatting is primarily used for visual hierarchy.

Recommended bold elements include:

- Candidate name
- Section headings
- Job titles
- Company names
- Project names

Technical keywords do not need to be bolded simply to improve ATS parsing.

For example:

```text
Node.js
```

is already machine-readable text.

Making it bold does not inherently increase the ATS score.

Formatting should therefore prioritize human readability.

---

# PDF Generation

The application uses the browser's native print functionality.

The basic implementation is:

```js
const downloadResume = () => {
  window.print();
};
```

The browser then provides the print dialog.

The user can select:

```text
Destination: Save as PDF
```

---

# Why Browser Print?

Using browser print has an important architectural advantage.

The project does not need to maintain two separate resume templates.

Without browser print:

```text
React Resume
     +
Separate PDF Template
```

With browser print:

```text
React Resume
     |
     v
Print CSS
     |
     v
PDF
```

The same document structure is therefore reused for both browser viewing and PDF generation.

---

# Print Styling

Print-specific CSS is used to control the PDF output.

Example:

```css
@page {
  size: A4;
  margin: 0;
}

@media print {
  .resume {
    width: 210mm;
    min-height: 297mm;
    height: 297mm;
  }
}
```

This ensures that the printed document follows the A4 dimensions.

---

# Download Button

The download button belongs to the application interface, not the resume itself.

Example:

```jsx
<div className="resume-actions">
  <button
    type="button"
    className="download-button"
    onClick={downloadResume}
  >
    Download PDF
  </button>
</div>
```

The button is hidden during printing:

```css
@media print {
  .resume-actions,
  .download-button {
    display: none !important;
    visibility: hidden !important;
  }
}
```

Therefore:

### Browser

```text
[ Download PDF ]

+-------------------------------+
|          RESUME               |
|                               |
|  Professional Summary         |
|  ...                          |
+-------------------------------+
```

### PDF

```text
+-------------------------------+
|          RESUME               |
|                               |
|  Professional Summary         |
|  ...                          |
+-------------------------------+
```

The button is not included in the PDF.

---

# Responsive Design

The primary purpose of the application is to create an A4 resume.

However, the web version also supports smaller screens.

On desktop:

```text
A4 document
centered in browser
```

On smaller screens:

```text
full-width document
reduced outer spacing
```

The print layout remains A4 regardless of screen size.

---

# Development Setup

## Prerequisites

Install the following:

- Node.js
- npm
- Git

Verify Node.js:

```bash
node --version
```

Verify npm:

```bash
npm --version
```

Verify Git:

```bash
git --version
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project:

```bash
cd <repository-name>
```

Install dependencies:

```bash
npm install
```

---

# Running the Application

Start the development server:

```bash
npm run dev
```

The terminal will provide the local development URL.

Open the URL in a browser to view the resume.

---

# Updating Resume Content

Most content changes should be made in:

```text
src/data/resume.js
```

The components generally do not need to be modified when only the resume content changes.

---

# Updating Contact Information

Update the `personal` object:

```js
personal: {
  name: "Aryan Kumar",
  phone: "+91-7077196479",
  email: "kumararyan1929@gmail.com",

  linkedin: "LinkedIn",
  linkedinUrl: "https://www.linkedin.com/in/aryanjsx/",

  portfolio: "Portfolio",
  portfolioUrl: "https://aryankr.in/",
}
```

---

# Updating Education

Modify the education object:

```js
education: {
  institution: "Bengal Institute of Technology, Kolkata (WB)",
  degree: "Bachelor of Technology – Information Technology",
  cgpa: "8.6",
  duration: "August 2019 - June 2023",
}
```

The `Education.jsx` component automatically renders the updated information.

---

# Updating Skills

Skills can be updated through the `skills` array.

Example:

```js
skills: [
  {
    category: "Programming",
    technologies: [
      "Python",
      "Java",
      "JavaScript",
    ],
  },
  {
    category: "Frontend Development",
    technologies: [
      "React.js",
      "Hooks",
      "State Management",
      "Component Architecture",
    ],
  },
]
```

Additional categories can be added without changing the component.

---

# Updating Experience

Add or modify entries in the `experience` array.

Example:

```js
experience: [
  {
    role: "Software Engineer",
    company: "Company Name",
    location: "Hyderabad",
    duration: "Aug 2024 – Present",

    responsibilities: [
      "Developed and maintained scalable applications.",
      "Designed and integrated RESTful APIs.",
      "Improved application reliability and performance.",
    ],
  },
]
```

The component automatically renders each experience entry.

---

# Updating Projects

Projects can be updated through the `projects` array.

Example:

```js
projects: [
  {
    name: "Project Name",

    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
    ],

    description: [
      "Designed and developed the application.",
      "Implemented RESTful APIs.",
      "Improved application performance.",
    ],
  },
]
```

---

# Customizing the Layout

Visual changes should primarily be made in:

```text
src/styles/resume.css
```

Common properties that may need adjustment include:

```css
font-size
line-height
margin
padding
gap
width
min-height
```

For example:

```css
.resume-name {
  font-size: 20pt;
}
```

The layout should be adjusted carefully because the goal is to maintain the A4 document structure.

---

# PDF Workflow

The intended workflow is:

```text
1. Open the resume website
        |
        v
2. Review the resume
        |
        v
3. Click "Download PDF"
        |
        v
4. Browser opens print dialog
        |
        v
5. Select "Save as PDF"
        |
        v
6. Save the resume
```

The resulting PDF should contain the resume only.

---

# ATS Validation

ATS compatibility should be validated at the final PDF level rather than assumed from the React implementation alone.

Recommended validation process:

```text
React Resume
     |
     v
Browser Render
     |
     v
Save as PDF
     |
     v
Extract PDF Text
     |
     v
Check Reading Order
     |
     v
Check Section Headings
     |
     v
Check Contact Information
     |
     v
Check Skills and Keywords
     |
     v
Check Page Count
```

Important checks include:

- Can text be selected?
- Can text be copied?
- Is the reading order logical?
- Are headings recognizable?
- Are dates associated with the correct experience?
- Are skills extractable?
- Are links retained?
- Is the resume the intended page count?
- Does the PDF visually match the browser version?

---

# Creating Role-Specific Versions

Because resume content is separated from presentation, the project can eventually support multiple role-specific versions.

Possible versions include:

```text
Software Engineer
Data Engineer
DevOps Engineer
Cloud Engineer
Backend Engineer
Full Stack Engineer
```

For example:

```text
Software Engineer Resume
        |
        +-- React
        +-- Node.js
        +-- JavaScript
        +-- Java
        +-- REST APIs
        +-- Azure
```

and:

```text
Data Engineer Resume
        |
        +-- SQL
        +-- Python
        +-- AWS
        +-- ETL
        +-- Spark
        +-- Data Warehousing
```

The same visual template can be reused while the underlying data changes.

---

# Why This Architecture Supports Multiple Resumes

The visual layout is separated from the resume data.

```text
             Resume Template
                    |
        +-----------+-----------+
        |           |           |
        v           v           v
 Software       Data        DevOps
 Engineer      Engineer     Engineer
   Data          Data          Data
```

This means a future resume selector could switch between different datasets without creating separate React applications.

---

# Git Workflow

Because the resume is code, Git can be used to track every change.

Check the repository status:

```bash
git status
```

Review changes:

```bash
git diff
```

Stage changes:

```bash
git add .
```

Commit changes:

```bash
git commit -m "update resume"
```

Push changes:

```bash
git push
```

---

# Recommended Commit Messages

Use descriptive commit messages.

Examples:

```text
feat: add resume data architecture
feat: add experience section
feat: add projects section
feat: add PDF download
style: implement A4 resume layout
style: adjust resume spacing
fix: hide download button during print
fix: align education information
docs: update README
```

---

# Deployment

The application can be deployed as a static React application.

Recommended platforms include:

- Vercel
- Netlify
- GitHub Pages

---

# Vercel Deployment

A typical deployment flow is:

```text
GitHub Repository
       |
       v
    Vercel
       |
       v
  Build Application
       |
       v
 Deploy Static Site
       |
       v
 Public Resume URL
```

The deployed URL can be used as an online resume while the same application can generate the PDF version.

---

# Future Improvements

The current implementation intentionally keeps the project simple.

Possible future improvements include:

## Multiple Resume Templates

Support multiple visual templates while keeping the same data structure.

---

## Resume Version Selector

Allow the user to choose:

```text
Resume Version

[ Software Engineer ▼ ]

[ Preview ]
[ Download PDF ]
```

---

## Resume Editor

Add a UI for editing:

- Personal information
- Summary
- Education
- Skills
- Experience
- Projects

This would eliminate the need to edit `resume.js` manually.

---

## Job Description Analyzer

Allow a user to paste a job description:

```text
+--------------------------------+
| Paste Job Description          |
|                                |
| ...                            |
+--------------------------------+

[ Analyze ]
```

The application could then identify relevant skills and keywords.

---

## ATS Keyword Matching

A future implementation could compare:

```text
Job Description
       |
       v
Required Keywords
       |
       v
Resume Keywords
       |
       v
Matched Keywords
       |
       v
Missing Keywords
```

This would help create job-specific resume versions.

---

## Resume Version History

Support multiple datasets such as:

```text
resume-software-engineer.js
resume-data-engineer.js
resume-devops.js
resume-cloud-engineer.js
```

or a single configuration containing multiple profiles.

---

## Automated PDF Generation

The current implementation uses browser printing.

A future version could add automated PDF generation if direct file generation without a print dialog becomes necessary.

---

## Automated Deployment

GitHub Actions could be added to validate and deploy the application automatically.

Possible workflow:

```text
git push
    |
    v
GitHub Actions
    |
    +-- Install dependencies
    |
    +-- Build application
    |
    +-- Run validation
    |
    v
Deploy
```

---

## Resume Analytics

A future public resume could optionally track anonymous page visits and basic usage metrics.

---

## Custom Domain

The deployed resume could be hosted on a custom domain.

---

# Limitations

## Browser Print Dependency

The current PDF export relies on the browser's native print dialog.

The exact print interface differs between browsers and operating systems.

---

## ATS Compatibility

No resume implementation can guarantee a particular ATS score.

ATS systems differ in:

- Parsing behavior
- Keyword matching
- Ranking algorithms
- Document processing
- Job-specific scoring

This project focuses on creating a clean, semantic, machine-readable document.

---

## Single Template

The current project focuses on one primary resume layout.

Additional templates can be introduced later.

---

## Manual Content Optimization

The application currently renders the resume content provided in the data file.

It does not automatically rewrite or optimize resume content for a job description.

---

# Design Principles

The project follows several principles.

## 1. Content First

Resume content should remain the primary concern.

Technology should support the resume rather than distract from it.

---

## 2. Separate Data From Presentation

Resume information belongs in:

```text
src/data/resume.js
```

Presentation belongs in:

```text
src/styles/resume.css
```

---

## 3. Semantic Structure

HTML should represent the logical structure of the document.

---

## 4. A4 First

The resume is designed as a physical document first and a web page second.

---

## 5. Print Friendly

The browser version and PDF version should use the same underlying document.

---

## 6. Minimal Dependencies

The project intentionally avoids unnecessary libraries and services.

---

## 7. Maintainability

Updating the resume should not require rebuilding the entire UI.

---

# Development Philosophy

The project is intentionally simple.

A resume does not need:

- A backend
- A database
- Authentication
- A CMS
- Complex state management
- A PDF microservice

The core problem is document rendering.

React provides the component architecture.

JavaScript provides the data.

CSS provides the layout.

The browser provides the PDF export.

This keeps the implementation easy to understand and maintain.

---

# Example Workflow

A typical update might look like this:

```text
1. Open src/data/resume.js
        |
        v
2. Update experience
        |
        v
3. Save file
        |
        v
4. React hot reloads
        |
        v
5. Review browser preview
        |
        v
6. Click Download PDF
        |
        v
7. Save as PDF
        |
        v
8. Validate PDF
        |
        v
9. Commit changes
        |
        v
10. Push to GitHub
```

---

# Repository Maintenance

When modifying the resume:

1. Update the data first.
2. Check the browser preview.
3. Verify that the A4 layout has not broken.
4. Test the PDF output.
5. Confirm the download button does not appear in the PDF.
6. Check that all text remains selectable.
7. Check that links work.
8. Validate the final page count.
9. Commit the changes.
10. Push the changes to GitHub.

---

# License

This project is licensed under the MIT License.

See the `LICENSE` file for details.

---

# Author

## Aryan Kumar

Software Engineer

### Profiles

- LinkedIn: [@aryanjsx](https://www.linkedin.com/in/aryanjsx/)
- Portfolio: [aryankr.in](https://aryankr.in/)
- GitHub: [aryanjsx](https://github.com/aryanjsx/)

---

# Conclusion

This project provides a maintainable alternative to a traditional Word-based resume.

Instead of manually controlling document alignment, the resume is represented as structured data and rendered through React.

The architecture separates:

```text
Content
   |
   v
Data
   |
   v
React Components
   |
   v
Semantic HTML
   |
   v
CSS
   |
   +----------+
   |          |
   v          v
Browser      PDF
```

The result is a resume that can be:

- Maintained through code
- Version-controlled with Git
- Hosted as a website
- Viewed in a browser
- Exported as an A4 PDF
- Updated without manually fixing Word alignment
- Structured for machine-readable parsing
- Reused for future role-specific resume versions

The project can eventually evolve from a single resume renderer into a complete resume management and job-application tool while keeping the same underlying data-driven architecture.
