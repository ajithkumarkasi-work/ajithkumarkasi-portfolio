import React, { useEffect, useState } from "react";
import {
  profileData,
  metricsData,
  educationData,
  skillsData,
  experienceData,
  projectsData,
  servicesData,
  achievementsData,
  processData,
} from "./data.js";
const resumeFile = "/Ajithkumar_Kasi_Resume.pdf";
const resumeDownloadName = "Ajithkumar_Kasi_Resume.pdf";

const NewApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skillCategoryIcons = [
    "code-2",
    "component",
    "monitor-play",
    "line-chart",
  ];

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }, [isMenuOpen]);

  return (
    <div className="app-wrapper">
      <header className="site-header">
        <div className="container row-between">
          <a href="#top" className="brand">
            AK
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="site-nav"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <i data-lucide={isMenuOpen ? "x" : "menu"} />
          </button>
          <nav
            id="site-nav"
            className={`top-nav ${isMenuOpen ? "is-open" : ""}`.trim()}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Frontend and OTT Engineering</p>
              <h1>{profileData.name}</h1>
              <p className="hero-role">{profileData.role}</p>
              <p className="hero-summary">{profileData.summary}</p>

              <div className="hero-tags">
                <span>React.js</span>
                <span>TypeScript</span>
                <span>Streaming</span>
                <span>Smart TV Platforms</span>
              </div>

              <div className="trust-bar">
                <span>Quickplay Media</span>
                <span>TotalQSR</span>
                <span>Chromecast</span>
                <span>50M+ Users</span>
              </div>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  <i data-lucide="arrow-right" />
                  View Projects
                </a>
                <a
                  className="btn btn-outline"
                  href={resumeFile}
                  download={resumeDownloadName}
                >
                  <i data-lucide="download" />
                  Download Resume
                </a>
              </div>
            </div>

            <aside className="hero-panel">
              <h2>Quick Snapshot</h2>
              <ul>
                <li>
                  <i data-lucide="map-pin" />
                  <span>{profileData.location}</span>
                </li>
                <li>
                  <i data-lucide="phone" />
                  <a href={`tel:${profileData.phone.replace(/\s/g, "")}`}>
                    {profileData.phone}
                  </a>
                </li>
                <li>
                  <i data-lucide="mail" />
                  <a href={`mailto:${profileData.email}`}>
                    {profileData.email}
                  </a>
                </li>
                <li>
                  <i data-lucide="linkedin" />
                  <a
                    href={profileData.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Overview</p>
              <h2>Impact at a Glance</h2>
            </div>

            <div className="metrics-grid">
              {metricsData.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <p className="metric-value">{metric.value}</p>
                  <p className="metric-label">{metric.label}</p>
                </article>
              ))}
            </div>

            <article className="education-card">
              <p className="eyebrow">Education</p>
              <h3>{educationData.degree}</h3>
              <p>{educationData.institution}</p>
              <p>
                {educationData.location} | {educationData.period}
              </p>
            </article>
          </div>
        </section>

        <section id="services" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">What I Deliver</p>
              <h2>Core Services</h2>
            </div>

            <div className="services-grid">
              {servicesData.map((service) => (
                <article key={service.title} className="service-card">
                  <div className="service-icon">
                    <i data-lucide={service.icon} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Capabilities</p>
              <h2>Skills and Technology</h2>
            </div>
            <div className="skills-layout">
              <aside className="skills-intro-card">
                <p className="eyebrow">Tech Stack</p>
                <h3>
                  Built for scale across Web, OTT, and analytics platforms.
                </h3>
                <p>
                  Strong product engineering focus with reusable architecture,
                  quality telemetry, and multi-device playback experience.
                </p>
              </aside>

              <div className="skills-grid">
                {Object.entries(skillsData).map(([category, skills], idx) => (
                  <article key={category} className="skills-card">
                    <div className="skills-card-head">
                      <h3>
                        <span className="skills-icon-wrap">
                          <i
                            data-lucide={
                              skillCategoryIcons[
                                idx % skillCategoryIcons.length
                              ]
                            }
                          />
                        </span>
                        {category}
                      </h3>
                      <span className="skills-count">
                        {skills.length} items
                      </span>
                    </div>
                    <div className="skill-pill-group">
                      {skills.map((skill) => (
                        <span key={skill} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Career</p>
              <h2>Relevant Experience</h2>
            </div>

            <div className="experience-list">
              {experienceData.map((item) => (
                <article key={item.company} className="experience-card">
                  <div className="experience-head">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="company">{item.company}</p>
                      <p className="location">{item.location}</p>
                    </div>
                    <p className="period">{item.period}</p>
                  </div>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Proof of Work</p>
              <h2>Highlights and Outcomes</h2>
            </div>
            <div className="achievements-grid">
              {achievementsData.map((item) => (
                <article key={item.title} className="achievement-card">
                  <p className="achievement-value">{item.value}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Work Samples</p>
              <h2>Projects</h2>
            </div>

            <div className="projects-grid">
              {projectsData.map((project) => (
                <article key={project.title} className="project-card">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-impact">{project.impact}</p>
                  <div className="chip-group">
                    {project.stack.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                  {project.liveUrl ? (
                    <a
                      className="project-link"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Live Project
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">How I Work</p>
              <h2>Build Process</h2>
            </div>
            <div className="process-grid">
              {processData.map((item) => (
                <article key={item.step} className="process-card">
                  <p className="process-step">{item.step}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <article className="contact-card">
              <p className="eyebrow">Let us connect</p>
              <h2>Open to frontend and OTT engineering opportunities</h2>
              <div className="contact-links">
                <a href={`mailto:${profileData.email}`}>
                  <i data-lucide="mail" />
                  {profileData.email}
                </a>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i data-lucide="linkedin" />
                  linkedin.com/in/ajithkumar-kasi
                </a>
                <a href={`tel:${profileData.phone.replace(/\s/g, "")}`}>
                  <i data-lucide="phone" />
                  {profileData.phone}
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container row-between">
          <p>© 2026 {profileData.name}</p>
          <a href={resumeFile} download={resumeDownloadName}>
            Download Resume
          </a>
        </div>
      </footer>
    </div>
  );
};

export default NewApp;
