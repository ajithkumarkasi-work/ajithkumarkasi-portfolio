export const skillsData = {
  Frontend: [
    { name: "React.js", icon: "atom", color: "#61DAFB" },
    { name: "Next.js", icon: "layers", color: "#000000" },
    { name: "TypeScript", icon: "file-code", color: "#3178C6" },
    { name: "JavaScript", icon: "braces", color: "#F7DF1E" },
    { name: "Tailwind CSS", icon: "square", color: "#06B6D4" },
    { name: "Material UI", icon: "layout", color: "#007FFF" },
    { name: "Bootstrap", icon: "columns", color: "#7952B3" },
  ],
  "Backend & APIs": [
    { name: "Node.js", icon: "server", color: "#339933" },
    { name: "REST APIs", icon: "network", color: "#FF6C37" },
    { name: "MySQL", icon: "database", color: "#00758F" },
    { name: "Java", icon: "code-2", color: "#f97316" },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: "git-branch", color: "#F1502F" },
    { name: "GitHub", icon: "github", color: "#e5e7eb" },
    { name: "Visual Studio", icon: "monitor", color: "#3b82f6" },
    { name: "Tizen Studio", icon: "tv", color: "#1428A0" },
    { name: "New Relic", icon: "bar-chart-3", color: "#00C7FD" },
  ],
  "Streaming Tech": [
    { name: "HLS", icon: "activity", color: "#f97316" },
    { name: "MPEG-DASH", icon: "activity", color: "#f97316" },
    { name: "Chromecast", icon: "cast", color: "#E8735F" },
    { name: "Dolby Atmos", icon: "volume-2", color: "#808080" },
  ],
};

export const projectsData = [
  {
    title: "Web SDK for OTT Platforms",
    problem:
      "Needed a unified video player SDK compatible across platforms like Aha, Canela, and Univision.",
    solution:
      "Contributed to a modular React-based Web SDK with TypeScript, supporting HLS/DASH streaming, Chromecast, and Dolby Atmos.",
    tech: ["React", "TypeScript", "HLS", "MPEG-DASH"],
    impact:
      "Improved reliability and load times across multiple OTT platforms.",
  },
  {
    title: "New Relic Validator Tool",
    problem:
      "Manual validation of New Relic telemetry attributes was time-consuming and error-prone.",
    solution:
      "Developed an automation tool to validate required attributes and surface missing data using New Relic APIs.",
    tech: ["React", "JavaScript", "New Relic API"],
    impact:
      "Improved monitoring reliability by ensuring all required attributes are present.",
  },
  {
    title: "Websites & Portfolios",
    problem:
      "Needed modern, responsive websites for products and personal branding.",
    solution:
      "Built responsive sites such as the TotalQSR website, Codesirpi sample portfolio, and personal portfolio using React, Next.js, Tailwind CSS, and Framer.",
    tech: ["React", "Next.js", "Tailwind CSS", "Framer"],
    impact:
      "Delivered clean, responsive experiences across desktop and mobile devices.",
  },
];

export const experienceData = [
  {
    company: "Avig Business Solutions - Quickplay Media Pvt Ltd",
    role: "Software Engineer",
    period: "Sep 2024 — Present",
    highlights: [
      "Core contributor to the Web SDK library used across platforms like Aha, Canela, and Univision.",
      "Developed and maintained a sample app to simulate product behavior and validate SDK functionalities.",
      "Contributed to Dolby Atmos detection and integration for web and WebTV platforms, especially for Aha.",
      "Implemented Dolby Atmos switching during content playback to provide seamless audio transitions.",
      "Involved in Chromecast feature development and New Relic monitoring integration.",
      "Debugged complex web issues across browsers and environments, including device-level debugging on LG, Samsung TVs, Xbox, PS5, and PS4 via sideloading and tunneling.",
    ],
  },
  {
    company: "Codesirpi Software LLP",
    role: "Junior Software Engineer",
    period: "May 2023 — Aug 2024",
    highlights: [
      "Participated in web and mobile application development for various client projects.",
      "Integrated front-end components with backend APIs and data sources for seamless functionality.",
      "Optimized frontend performance using code splitting, lazy loading, and advanced techniques.",
      "Mentored freshers, sharing knowledge and best practices in React.js and frontend development.",
      "Followed clean architectural style using Feature-Sliced Design (FSD).",
      "Implemented Effector-based state management patterns for predictable and scalable frontends.",
    ],
  },
];
