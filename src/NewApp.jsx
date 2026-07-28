import React, { useEffect } from "react";
import { skillsData, projectsData, experienceData } from "./data.js";
import resumePdf from "./Ajithkumar_Kasi.pdf";

// skillsData, projectsData, and experienceData are imported from data.js

function downloadResume() {
  const link = document.createElement("a");
  link.href = resumePdf;
  link.download = "Ajithkumar_Kasi_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const NewApp = () => {
  useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }, []);

  return (
    <div className="app-wrapper">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-full flex items-center justify-center px-6"
        style={{ paddingTop: 120, paddingBottom: 80 }}
      >
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-96 h-96 rounded-full"
            style={{
              top: -50,
              right: -100,
              background:
                "radial-gradient(circle, rgba(0, 212, 255, 0.15), transparent)",
              filter: "blur(40px)",
              animation: "blob-rotate 20s infinite",
            }}
          />
          <div
            className="absolute w-72 h-72 rounded-full"
            style={{
              bottom: 100,
              left: -50,
              background:
                "radial-gradient(circle, rgba(108, 99, 255, 0.12), transparent)",
              filter: "blur(40px)",
              animation: "blob-rotate 25s infinite reverse",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="fade-in-up fade-in-up-1">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass mb-8">
              <span
                className="text-sm font-medium"
                style={{ color: "#00c8ff" }}
              >
                ✨ Ready for new challenges
              </span>
            </div>
          </div>

          <h1
            id="hero-name"
            className="fade-in-up fade-in-up-2 text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text-primary">Ajithkumar Kasi</span>
          </h1>

          <p
            id="hero-title"
            className="fade-in-up fade-in-up-3 text-2xl md:text-3xl font-semibold mb-4"
            style={{ color: "#a0aec0" }}
          >
            Software Engineer
          </p>

          <p
            id="hero-tagline"
            className="fade-in-up fade-in-up-4 text-base md:text-lg max-w-2xl mx-auto mb-8"
            style={{ color: "#cbd5e1", lineHeight: 1.8 }}
          >
            Building modern web applications and scalable Web SDKs for OTT
            platforms
          </p>

          <div className="fade-in-up fade-in-up-5 flex flex-wrap justify-center gap-3 mb-12">
            <span
              className="px-3.5 py-2 rounded-lg text-xs font-semibold glass"
              style={{ color: "#00c8ff" }}
            >
              AVIG (Quickplay Media)
            </span>
            <span style={{ color: "#404858" }}>•</span>
            <span
              className="px-3.5 py-2 rounded-lg text-xs font-semibold glass"
              style={{ color: "#00c8ff" }}
            >
              Codesirpi Software
            </span>
          </div>

          <div className="fade-in-up fade-in-up-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="btn-primary px-8 py-3.5 rounded-lg text-sm inline-flex items-center gap-2 justify-center"
            >
              <i data-lucide="arrow-right" style={{ width: 18, height: 18 }} />
              View Projects
            </a>
            <button
              type="button"
              onClick={downloadResume}
              className="btn-secondary px-8 py-3.5 rounded-lg text-sm inline-flex items-center gap-2 justify-center"
            >
              <i data-lucide="download" style={{ width: 18, height: 18 }} />
              Resume
            </button>
            <a
              href="#contact"
              className="btn-secondary px-8 py-3.5 rounded-lg text-sm inline-flex items-center gap-2 justify-center"
            >
              <i data-lucide="mail" style={{ width: 18, height: 18 }} />
              Contact
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative w-full px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#00c8ff" }}
            >
              About
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text-primary">Who I Am</span>
            </h2>
          </div>

          <div className="card-glow rounded-2xl p-8 md:p-12">
            <p
              id="about-text"
              className="text-base md:text-lg leading-relaxed mb-6"
              style={{ color: "#cbd5e1", lineHeight: 2 }}
            >
              Experienced frontend engineer specializing in Web SDK development
              and OTT (Over-The-Top) streaming platforms. I've built and
              optimized Web SDKs used across platforms like
              <span style={{ color: "#6c63ff", fontWeight: 600 }}>
                {" "}
                Aha, Canela, and Univision
              </span>
              , reaching millions of users globally.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "#cbd5e1", lineHeight: 2 }}
            >
              My expertise spans
              <span style={{ color: "#6c63ff", fontWeight: 600 }}>
                {" "}
                React, TypeScript, and performance optimization
              </span>
              , with deep experience debugging and deploying across Smart TV
              platforms including
              <span style={{ color: "#6c63ff", fontWeight: 600 }}>
                {" "}
                LG, Samsung, PS5, and Xbox
              </span>
              . I'm passionate about building systems that scale, mentoring
              teams, and crafting clean, maintainable code architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative w-full px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#6c63ff" }}
            >
              Expertise
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text-primary">
                Tech I Work With Daily
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div key={category} className="skill-category">
                <h3
                  className="text-lg font-bold mb-6 flex items-center gap-3"
                  style={{ color: "#e0e7ff" }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 28,
                      background: "linear-gradient(180deg, #6c63ff, #00d4ff)",
                      borderRadius: 2,
                    }}
                  />
                  {category}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="skill-badge card-glow rounded-lg p-4 text-center"
                    >
                      <div
                        className="inline-flex items-center justify-center w-10 h-10 mb-3 rounded-lg"
                        style={{ background: `${skill.color}20` }}
                      >
                        <i
                          data-lucide={skill.icon}
                          style={{
                            width: 20,
                            height: 20,
                            color: skill.color,
                          }}
                        />
                      </div>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: "#e0e7ff" }}
                      >
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative w-full px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#6c63ff" }}
            >
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text-primary">Featured Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, idx) => (
              <div
                key={project.title}
                className="card-glow rounded-xl p-6 fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3
                  className="text-lg font-bold mb-4"
                  style={{ color: "#e0e7ff" }}
                >
                  {project.title}
                </h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p
                      className="text-xs font-bold mb-2"
                      style={{ color: "#6c63ff" }}
                    >
                      Problem
                    </p>
                    <p className="text-sm" style={{ color: "#a0aec0" }}>
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold mb-2"
                      style={{ color: "#6c63ff" }}
                    >
                      Solution
                    </p>
                    <p className="text-sm" style={{ color: "#a0aec0" }}>
                      {project.solution}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold mb-2"
                      style={{ color: "#00d4ff" }}
                    >
                      Impact
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "#00d4ff" }}
                    >
                      {project.impact}
                    </p>
                  </div>
                </div>
                <div
                  className="flex flex-wrap gap-2 pt-4 border-t"
                  style={{ borderColor: "rgba(108, 99, 255, 0.2)" }}
                >
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold"
                      style={{
                        background: "rgba(108, 99, 255, 0.2)",
                        color: "#6c63ff",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative w-full px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#6c63ff" }}
            >
              Career Path
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text-primary">
                Professional Experience
              </span>
            </h2>
          </div>

          <div className="timeline">
            {experienceData.map((exp, idx) => (
              <div
                key={exp.company}
                className="timeline-item fade-in-up"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="timeline-dot" />
                <div className="card-glow rounded-xl p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3
                        className="text-xl font-bold mb-2"
                        style={{ color: "#e0e7ff" }}
                      >
                        {exp.role}
                      </h3>
                      <p className="font-semibold" style={{ color: "#6c63ff" }}>
                        {exp.company}
                      </p>
                    </div>
                    <span
                      className="text-sm font-semibold mt-4 md:mt-0 px-4 py-2 rounded-lg glass"
                      style={{ color: "#a0aec0", width: "fit-content" }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul
                    className="space-y-3 text-sm"
                    style={{ color: "#a0aec0" }}
                  >
                    {exp.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3">
                        <span
                          className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: "#6c63ff" }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Me Different */}
      <section id="difference" className="relative w-full px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "#6c63ff" }}
            >
              Unique Value
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text-primary">What Sets Me Apart</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-glow rounded-xl p-8 text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl"
                style={{ background: "rgba(108, 99, 255, 0.1)" }}
              >
                <i
                  data-lucide="tv"
                  style={{ width: 28, height: 28, color: "#00d4ff" }}
                />
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#e0e7ff" }}
              >
                Smart TV Expertise
              </h3>
              <p className="text-sm" style={{ color: "#a0aec0" }}>
                Deep experience debugging and optimizing across LG, Samsung,
                PS5, Xbox platforms
              </p>
            </div>
            <div className="card-glow rounded-xl p-8 text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl"
                style={{ background: "rgba(108, 99, 255, 0.1)" }}
              >
                <i
                  data-lucide="package"
                  style={{ width: 28, height: 28, color: "#6c63ff" }}
                />
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#e0e7ff" }}
              >
                SDK & Web Apps
              </h3>
              <p className="text-sm" style={{ color: "#a0aec0" }}>
                Build production Web SDKs and responsive web applications for
                OTT products and clients
              </p>
            </div>
            <div className="card-glow rounded-xl p-8 text-center">
              <div
                className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl"
                style={{ background: "rgba(108, 99, 255, 0.1)" }}
              >
                <i
                  data-lucide="zap"
                  style={{ width: 28, height: 28, color: "#ff006e" }}
                />
              </div>
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: "#e0e7ff" }}
              >
                Clean Architecture
              </h3>
              <p className="text-sm" style={{ color: "#a0aec0" }}>
                Apply Feature‑Sliced Design, Effector, and best practices to
                keep frontends scalable and maintainable
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative w-full px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "#6c63ff" }}
          >
            Get in Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-primary">Let's Connect</span>
          </h2>
          <p
            className="text-base max-w-lg mx-auto mb-12"
            style={{ color: "#a0aec0", lineHeight: 1.8 }}
          >
            I'm open to discussing new projects, optimizations, and
            opportunities to build scalable systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              id="contact-email-btn"
              href="mailto:ajithkumar.kasi.work@gmail.com"
              className="btn-primary px-8 py-3.5 rounded-lg text-sm inline-flex items-center gap-2 justify-center"
            >
              <i data-lucide="mail" style={{ width: 18, height: 18 }} />
              <span id="contact-email-text">
                ajithkumar.kasi.work@gmail.com
              </span>
            </a>
          </div>
          <div className="flex items-center justify-center gap-6">
            <a
              id="github-link"
              href="https://github.com/ajithkumar-kasi"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-hover glass w-14 h-14 rounded-xl flex items-center justify-center transition-all"
            >
              <i
                data-lucide="github"
                style={{ width: 24, height: 24, color: "#6c63ff" }}
              />
            </a>
            <a
              id="linkedin-link"
              href="https://www.linkedin.com/in/ajithkumar-kasi/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-hover glass w-14 h-14 rounded-xl flex items-center justify-center transition-all"
            >
              <i
                data-lucide="linkedin"
                style={{ width: 24, height: 24, color: "#00d4ff" }}
              />
            </a>
            <a
              href="https://ajithkumar-kasi.github.io/ajith-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-hover glass w-14 h-14 rounded-xl flex items-center justify-center transition-all"
            >
              <i
                data-lucide="globe"
                style={{ width: 24, height: 24, color: "#ff006e" }}
              />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="relative w-full px-6 py-8"
        style={{ borderTop: "1px solid rgba(108, 99, 255, 0.1)" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs" style={{ color: "#404858" }}>
            © 2026 Ajithkumar K. Built with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NewApp;
