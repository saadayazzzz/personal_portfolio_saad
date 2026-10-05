import NeuralBackground from "@/components/NeuralBackground";
import Navbar from "@/components/Navbar";
import AgentTerminal from "@/components/AgentTerminal";
import { Counter, Reveal, SectionTitle, Spot, Typing } from "@/components/ui";
import {
  certifications, education, experience, profile, projects, skills, stats,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <NeuralBackground />
      <div className="glow g1" /><div className="glow g2" />
      <Navbar />

      <main id="top">
        {/* HERO */}
        <section className="hero container">
          <div className="hero-text">
            <span className="badge"><i className="dot" /> Open to opportunities · {profile.location}</span>
            <h1>
              Hi, I&apos;m <span className="grad">{profile.name}</span>
            </h1>
            <h3 className="role"><Typing words={profile.roles} /></h3>
            <p className="lead">{profile.tagline}. I design, ship and operate AI systems that actually run in production.</p>
            <div className="cta">
              <a className="btn primary" href="#projects">View Projects</a>
              <a className="btn" href="#contact">Get in touch</a>
              <a className="btn ghost" href="/Muhammad-Saad-Ayaz-CV.pdf" download>⬇ Download CV</a>
            </div>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`mailto:${profile.email}`}>Email</a>
            </div>
          </div>
          <div className="hero-side"><AgentTerminal /></div>
        </section>

        {/* STATS */}
        <section className="container stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="stat">
                <b><Counter to={s.value} suffix={s.suffix} /></b>
                <span>{s.label}</span>
              </div>
            </Reveal>
          ))}
        </section>

        {/* ABOUT */}
        <section className="container">
          <SectionTitle id="about" kicker="01 — About" title="Building AI that ships" />
          <Reveal>
            <p className="about">{profile.summary}</p>
          </Reveal>
        </section>

        {/* SKILLS */}
        <section className="container">
          <SectionTitle id="skills" kicker="02 — Skills" title="Tech stack" />
          <div className="grid skills">
            {skills.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <Spot>
                  <h4><span>{s.icon}</span> {s.title}</h4>
                  <div className="chips">
                    {s.items.map((it) => <span key={it} className="chip">{it}</span>)}
                  </div>
                </Spot>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="container">
          <SectionTitle id="experience" kicker="03 — Experience" title="Where I've worked" />
          <div className="timeline">
            {experience.map((e, i) => (
              <Reveal key={e.company} delay={i * 80}>
                <div className={`t-item ${e.current ? "current" : ""}`}>
                  <span className="t-dot" />
                  <Spot>
                    <div className="t-head">
                      <div>
                        <h4>{e.role}</h4>
                        <p className="company">{e.company}</p>
                      </div>
                      <span className="period">{e.period}</span>
                    </div>
                    <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                  </Spot>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="container">
          <SectionTitle id="projects" kicker="04 — Projects" title="Things I've built" />
          <div className="grid projects">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 2) * 90} className={p.featured ? "span2" : ""}>
                <Spot className={p.featured ? "featured" : ""}>
                  {p.featured && <span className="ribbon">★ Featured</span>}
                  <h4>{p.name}</h4>
                  <p className="sub">{p.subtitle}</p>
                  <ul>{p.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                  <div className="chips">{p.stack.map((s) => <span key={s} className="chip alt">{s}</span>)}</div>
                  {p.link && (
                    <a className="link" href={p.link} target="_blank" rel="noreferrer">View on GitHub →</a>
                  )}
                </Spot>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section className="container">
          <SectionTitle id="education" kicker="05 — Education" title="Education & certifications" />
          <div className="grid two">
            <Reveal>
              <Spot>
                <h4>🎓 Education</h4>
                {education.map((e) => (
                  <div key={e.degree} className="edu">
                    <b>{e.degree}</b>
                    <span>{e.school}</span>
                    <em>{e.period}</em>
                  </div>
                ))}
              </Spot>
            </Reveal>
            <Reveal delay={90}>
              <Spot>
                <h4>📜 Certifications</h4>
                <div className="chips">{certifications.map((c) => <span key={c} className="chip">{c}</span>)}</div>
              </Spot>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section className="container">
          <SectionTitle id="contact" kicker="06 — Contact" title="Let's build something" />
          <Reveal>
            <Spot className="contact">
              <p>Have an AI project, a role, or an idea? My inbox is open.</p>
              <a className="btn primary big" href={`mailto:${profile.email}`}>{profile.email}</a>
              <div className="socials center">
                <a href={`tel:${profile.phone.replace(/\s|-/g, "")}`}>{profile.phone}</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </Spot>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} {profile.name} · Built with Next.js · Deployed on Vercel
      </footer>
    </>
  );
}
