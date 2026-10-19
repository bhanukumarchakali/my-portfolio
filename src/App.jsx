import React from "react";
import { useState } from "react";
import {
  Code2,
  Server,
  Zap,
  Rocket,
  Palette,
  Database,
  Plug,
  Cloud,
  Brain,
} from "lucide-react";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#08080d] text-white">
      {/* Navbar */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#" className="text-2xl font-bold tracking-tight">
          <span className="text-purple-500">{"<"}</span>
          Bhanu<span className="text-purple-500">.</span>
          <span className="text-purple-500">{"/>"}</span>
        </a>

        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-300 md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "Close ✕" : "Menu ☰"}
          </button>

          <div
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute right-0 top-12 z-50 min-w-40 flex-col gap-4 rounded-xl border border-white/10 bg-[#111118] p-5 text-sm text-gray-300 md:static md:flex md:min-w-0 md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0`}
          >
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-purple-400"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <a
          href="#contact"
          className="rounded-lg border border-purple-500/50 px-4 py-2 text-sm transition hover:bg-purple-500/10"
        >
          Let's Talk
        </a>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-6 py-20"
      >
        <div className="absolute left-1/2 top-1/2 -z-0 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-3xl text-center animate-fade-up">
          <p className="mb-6 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Hey, I'm
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Chakali Bhanu Kumar
            </span>
            <span className="mt-2 block text-2xl sm:text-3xl">
              Full Stack Developer
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            Building modern web applications with React, Node.js, Express, and
            MongoDB. I enjoy turning ideas into practical, user-friendly
            products.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-purple-600 px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:bg-purple-500"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/15 px-6 py-3 font-medium text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-purple-400 hover:text-white"
            >
              Contact Me
            </a>

            <a
              href="/Bhanu-Kumar-Resume.pdf"
              download="Bhanu-Kumar-Resume.pdf"
              className="rounded-lg border border-purple-500/50 px-6 py-3 font-medium text-purple-300 transition duration-300 hover:-translate-y-1 hover:bg-purple-500/10"
            >
              Download Resume ↓
            </a>
          </div>

          <div className="mt-12 flex flex-col items-center gap-5">
            <p className="text-sm text-gray-500">
              React · Node.js · Express · MongoDB
            </p>

            <div className="flex gap-4">
              <a
                href="https://github.com/bhanukumarchakali"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 px-5 py-2.5 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-purple-500 hover:text-purple-400"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/bhanu-kumar-chakali-8579b22a7"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-white/10 px-5 py-2.5 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
              My Work
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Featured <span className="text-purple-400">Projects</span>
            </h2>
            <p className="mt-4 max-w-xl text-gray-400">
              A few things I've built to solve real problems and sharpen my
              skills.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* TeamFlow */}
            <article className="group animate-fade-up rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500/50">
              <div className="mb-6 flex items-start justify-between transition duration-300 hover:-translate-y-2 hover:border-purple-500/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-2xl">
                  ⚡
                </div>
                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs text-green-400">
                  Deployed
                </span>
              </div>
              <img
                src="/teamflow.png"
                alt="TeamFlow project preview"
                className="mb-5 h-48 w-full rounded-xl object-cover object-top"
              />

              <h3 className="text-xl font-semibold group-hover:text-purple-300">
                TeamFlow
              </h3>
              <p className="mt-3 leading-7 text-gray-400">
                A real-time project management SaaS for organizing workspaces,
                projects, tasks, and team collaboration, with secure
                authentication and live updates.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {["React", "Node.js", "Express", "MongoDB", "Socket.IO"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 px-3 py-1.5 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>

              <div className="mt-7 flex flex-wrap gap-5 text-sm">
                <a
                  href="https://team-flow-mauve.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-purple-500"
                >
                  Live Demo ↗
                </a>
                <a
                  href="https://github.com/bhanukumarchakali/TeamFlow"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-lg border border-purple-500/50 px-4 py-2 text-sm font-semibold text-purple-300 transition duration-300 hover:-translate-y-1 hover:bg-purple-500/10"
                >
                  Source Code ↗
                </a>
              </div>
            </article>

            {/* Coming Soon */}
            <article className="flex min-h-72 animate-fade-up flex-col justify-center rounded-2xl border border-dashed border-white/15 p-7 transition duration-300 hover:border-blue-500/50 animation-delay-200">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15 text-2xl">
                ✨
              </div>
              <h3 className="text-xl font-semibold">More Coming Soon</h3>
              <p className="mt-3 max-w-sm leading-7 text-gray-400">
                I'm continuously learning, building, and exploring new ideas.
                Stay tuned for more projects.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
              Get to Know Me
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              About <span className="text-purple-400">Me</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I'm Chakali Bhanu Kumar, a Full Stack Developer passionate about
              building modern web applications with the MERN stack. I enjoy
              creating clean, responsive interfaces and developing reliable
              backend systems that solve real-world problems.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              My flagship project,{" "}
              <span className="font-semibold text-white">TeamFlow</span>, is a
              real-time project management SaaS built with React, Node.js,
              Express, MongoDB, and Socket.IO. I'm continuously improving my
              problem-solving skills and building projects that prepare me for
              real-world software development.
            </p>

            <a
              href="https://github.com/bhanukumarchakali"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-block rounded-lg border border-purple-500/40 px-5 py-3 text-sm text-purple-300 transition hover:bg-purple-500/10"
            >
              Explore My GitHub ↗
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40">
              <div className="mb-3 flex items-center gap-3">
                <Code2 size={28} className="text-purple-400" />
                <p className="text-3xl font-bold text-purple-400">MERN</p>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Full Stack Development
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40">
              <div className="mb-3 flex items-center gap-3">
                <Server size={28} className="text-blue-400" />
                <p className="text-3xl font-bold text-blue-400">REST</p>
              </div>

              <p className="mt-2 text-sm text-gray-400">API Development</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40">
              <div className="mb-3 flex items-center gap-3">
                <Zap size={28} className="text-blue-400" />
                <p className="text-3xl font-bold text-blue-400">Real-time</p>
              </div>

              <p className="mt-2 text-sm text-gray-400">
                Socket.IO Applications
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-2 hover:border-purple-500/40">
              <div className="mb-3 flex items-center gap-3">
                <Rocket size={28} className="text-purple-400" />
                <p className="text-3xl font-bold text-purple-400">Always</p>
              </div>

              <p className="mt-2 text-sm text-gray-400">Learning & Improving</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
              What I Work With
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              My <span className="text-purple-400">Skills</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Technologies and tools I use to build and improve web
              applications.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Frontend",
                icon: Palette,
                skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
                color: "purple",
              },
              {
                title: "Backend",
                icon: Server,
                skills: [
                  "Node.js",
                  "Express.js",
                  "REST APIs",
                  "JWT Authentication",
                ],
                color: "blue",
              },
              {
                title: "Database & Tools",
                icon: Database,
                skills: ["MongoDB", "Mongoose", "Git", "GitHub", "Postman"],
                color: "purple",
              },
              {
                title: "Real-time & Integrations",
                icon: Plug,
                skills: ["Socket.IO", "Email OTP", "Cloudinary"],
                color: "blue",
              },
              {
                title: "Deployment",
                icon: Cloud,
                skills: ["Vercel", "Render", "MongoDB Atlas"],
                color: "purple",
              },
              {
                title: "Core Practices",
                icon: Brain,
                skills: [
                  "Problem Solving",
                  "Responsive Design",
                  "Authentication",
                ],
                color: "blue",
              },
            ].map((group) => (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/60"
              >
                <div className="mb-5 flex items-center gap-3">
                  <group.icon
                    size={22}
                    className={
                      group.color === "purple"
                        ? "text-purple-400"
                        : "text-blue-400"
                    }
                  />

                  <h3
                    className={`text-lg font-semibold ${
                      group.color === "purple"
                        ? "text-purple-400"
                        : "text-blue-400"
                    }`}
                  >
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-white/[0.02] to-blue-500/10 px-6 py-14 text-center sm:px-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            Let's Build Something
            <span className="block mt-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-400">
            I'm interested in connecting with fellow developers, exploring
            opportunities, and working on meaningful projects. Feel free to
            reach out!
          </p>

          <a
            href="https://www.linkedin.com/in/bhanu-kumar-chakali-8579b22a7"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-lg bg-purple-600 px-7 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:bg-purple-500"
          >
            Connect on LinkedIn ↗
          </a>

          <div className="mt-6">
            <a
              href="https://github.com/bhanukumarchakali"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-gray-400 transition hover:text-purple-400"
            >
              Or explore my GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row">
          <a href="#home" className="text-lg font-bold">
            <span className="text-purple-400">{"<"}</span>
            Bhanu<span className="text-purple-400">.</span>
            <span className="text-purple-400">{"/>"}</span>
          </a>

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Chakali Bhanu Kumar. Built with React &
            Tailwind CSS.
          </p>

          <a
            href="#home"
            className="text-sm text-gray-400 transition hover:text-purple-400"
          >
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
};

export default App;
