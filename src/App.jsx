import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Users,
} from 'lucide-react';

import profileSvg from './assets/profile.svg';
import Section from './components/Section.jsx';
import Pill from './components/Pill.jsx';
import TimelineItem from './components/TimelineItem.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import TextScramble from './components/TextScramble.jsx';
import Lanyard from './components/Lanyard.jsx';
import SpotlightCursor from './components/SpotlightCursor.jsx';
import MagneticButton from './components/MagneticButton.jsx';
import projCetak from './assets/project/cetak.png';
import projCetakNilai from './assets/project/cetaknilai.png';
import projDashboard from './assets/project/dashboard.png';
import projInputNilai from './assets/project/inputnilai.png';
import projLogin from './assets/project/login.png';
import projRaporSiswa from './assets/project/raporsiswa.png';
import orgBersama from './assets/organisasi/bersama.jpg';
import orgBersama2 from './assets/organisasi/bersama2.jpg';
import orgEducate from './assets/organisasi/educate.jpg';
import orgKmts from './assets/organisasi/kmts.jpg';
import kerjaBx from './assets/kerja/bx.png';
import kampusCollage from './assets/kampus/collage.png';

const PROFILE = {
  name: 'Tafarel Hutama Putra',
  role: 'Junior Backend / Software Engineer (Java, MySQL) — Project-Based Experience',
  location: 'Jakarta, Indonesia',
  email: 'tafarelhutama@gmail.com',
  github: 'https://github.com/farelptra',
  linkedin: 'https://www.linkedin.com/in/tafarel-putra/',
  instagram: 'https://www.instagram.com/farelptra1',
  phone: '+6285813105919',
  summary:
    'Last year student Informatics Engineering with hands-on experience building a Java–MySQL client–server application (CRUD, authentication, PDF reporting). Experienced in lab assistance and technical support, strong troubleshooting mindset, and comfortable guiding non-technical users through onboarding.',
};

const EDUCATION = {
  school: 'Indraprasta University PGRI',
  degree: 'B.Sc. in Informatics Engineering (2022-2026)',
  city: 'Condet, DKI Jakarta',
  gpa: '3.56',
  photos: [kampusCollage],
};

const SKILLS = {
  core: ['Java', 'MySQL', 'SQL', 'OOP', 'CRUD', 'Client–Server Concepts'],
  web: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
  other: ['Python', 'Microsoft Office (Word/Excel/PowerPoint)', 'Canva'],
  tools: ['Git (basic)', 'VS Code', 'IntelliJ IDEA (basic)', 'MySQL Workbench (basic)'],
  soft: ['Problem Solving', 'Troubleshooting', 'Communication', 'Teamwork', 'Time Management'],
};

const PROJECTS = [
  {
    title: 'Student Grade Management System — SMK Tanjung Barat',
    period: 'Oct 2025 – Dec 2025',
    stack: ['Java', 'MySQL', 'SQL', 'Client–Server'],
    summary:
      'A Java-based client–server application to manage grading workflows with structured database storage and printable reporting.',
    highlights: [
      'Built CRUD modules for students, teachers, subjects, and grades.',
      'Implemented username/password authentication for access control.',
      'Integrated MySQL for structured data storage and validation.',
      'Generated printable grade reports with PDF output.',
      'Presented to the school principal and iterated features based on stakeholder requests.',
    ],
    links: {
      github: '',
      demo: '',
    },
    photos: [projLogin, projDashboard, projInputNilai, projCetak, projCetakNilai, projRaporSiswa],
  },
];


const EXPERIENCE = [
  {
    title: 'Laboratory Assistant',
    org: 'Indraprasta University PGRI',
    period: 'Jan 2024 - Dec 2024',
    bullets: [
      'Assisted students during lab sessions and helped troubleshoot common coding/runtime errors.',
      'Provided step-by-step guidance to ensure sessions followed the module workflow and learning objectives.',
      'Gave basic feedback on code cleanliness, logic, and output correctness (per instructor guidelines).',
    ],
    photos: [kampusCollage],
  },
  {
    title: 'Game Master / Technical Support (Gaming & Simulator Systems)',
    org: 'Byebeli Experience',
    period: 'Sep 2024 - Dec 2024',
    bullets: [
      'Troubleshot hardware/software issues on gaming PCs, consoles, and simulator systems (F1 & flight simulators).',
      'Performed equipment setup, peripheral checks, and ensured stable operation under high-traffic conditions.',
      'Provided onboarding and clear technical guidance to non-technical customers.',
    ],
    instagram: 'https://www.instagram.com/byebeli.experience/?hl=en',
    photos: [kerjaBx],
  },
];



const VOLUNTEERING = [
  {
    title: 'Volunteer, Health Division',
    org: 'Kejar Mimpi Tangerang Selatan Serving (Gunung Anten Village, Banten)',
    period: 'May 2023 - Jul 2023',
    bullets: [
      'Delivered an anti-drug (NAPZA) awareness session for ~100 junior high students through presentations and interactive discussions.',
      'Supported community service activities at an elementary school as part of the program agenda.',
      'Supported one-week field operations: on-site coordination, communication with residents/schools, and smooth event execution.',
    ],
    instagram: 'https://www.instagram.com/kejarmimpi.tangsel/?hl=en',
    photos: [orgBersama, orgBersama2, orgEducate, orgKmts],
  },
];


const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Volunteering', href: '#volunteering' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const phrases = useMemo(
    () => [
      'Java • MySQL • Client–Server',
      'React • Node.js • Python (Basics)',
      'Troubleshooting • User Onboarding',
      'Project-based experience • Ready to learn fast',
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-white/20">
      <SpotlightCursor />

      {/* Top glow */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-white/10">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="font-semibold tracking-tight">{PROFILE.name}</span>
          </a>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="hover:text-white transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="relative min-h-[calc(100vh-64px)]">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
            <div className="order-2 flex flex-col justify-center md:order-1">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm text-slate-300"
              >
                <div className="inline-flex items-center gap-2 text-sm text-slate-300">
                  <MapPin className="h-4 w-4" /> {PROFILE.location}
                </div>
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-5 text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
              >
                <span className="bg-gradient-to-r from-emerald-400 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent"> Farel </span>
                Open for internship/entry-level
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12 }}
                className="mt-4 text-lg text-slate-200"
              >
                <div className="text-slate-300">{PROFILE.role}</div>
                <div className="mt-2 font-mono text-sm text-slate-200/90">
                  <TextScramble phrases={phrases} />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18 }}
                className="mt-6 max-w-prose text-slate-300"
              >
                {PROFILE.summary}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <MagneticButton
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-950 hover:bg-white/90"
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Projects <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>

                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 hover:bg-white/10"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 hover:bg-white/10"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href="https://drive.google.com/file/d/1hCgtP1wVwfCXvCG1jJe_PiVFkOcJamiI/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 hover:bg-white/10"
                >
                  My Resume
                </a>
              </motion.div>

            </div>

            <div className="order-1 md:order-2">
              <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:h-[520px]">
                <div className="absolute inset-0">
                  <Lanyard cameraDistance={25} cardTexture={profileSvg} />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-4 pb-10">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Stat label="Primary" value="Backend / Node.js" icon={Code2} />
                <Stat label="Database" value="MySQL / SQL" icon={Database} />
                <Stat label="Strength" value="Troubleshooting" icon={Briefcase} />
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <div className="mx-auto max-w-6xl px-4 pb-24">
          <div className="grid gap-10 md:grid-cols-[1fr_320px]">
            <div className="space-y-12">
              <Section
                id="about"
                title="About"
                subtitle="A quick snapshot of who I am and what I build"
                icon={Users}
              >
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-300">
                  <p>
                    I’m Tafarel Hutama Putra, Last year student Informatics Engineering 
                    with a focus on software and backend development. I build practical applications using Java 
                    and MySQL, including a client–server Student Grade Management System with CRUD features, 
                    authentication, and PDF report generation. I also have experience with web fundamentals 
                    (HTML, CSS, JavaScript, React) and backend basics using Node.js and Python. 
                    I enjoy turning requirements into working systems, improving features based on user feedback, 
                    and building solutions that are structured, reliable, and easy to use.
                  </p>
                </div>
              </Section>

              <Section id="projects" title="Projects" subtitle="Project School" icon={Code2}>
                <div className="grid gap-6">
                  {PROJECTS.filter(Boolean).map((p, i) => (
                    <ProjectCard key={p?.title ?? i} project={p} />
                  ))}
                </div>
              </Section>

              <Section id="experience" title="Experience" subtitle="What I've done" icon={Briefcase}>
                <div className="space-y-4">
                  {EXPERIENCE.map((item) => (
                    <TimelineItem key={item.title} {...item} />
                  ))}
                </div>
              </Section>

              <Section id="volunteering" title="Volunteering" subtitle="Community" icon={Users}>
                <div className="space-y-4">
                  {VOLUNTEERING.map((item) => (
                    <TimelineItem key={item.title} {...item} />
                  ))}
                </div>
              </Section>

              <Section id="education" title="Education" subtitle="Academic" icon={GraduationCap}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-wrap items-start gap-4">
                    <div className="flex-1 min-w-[240px]">
                      <div className="text-base font-semibold">{EDUCATION.school}</div>
                      <div className="mt-1 text-sm text-slate-300">{EDUCATION.degree}</div>
                      <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-300">
                        <span className="inline-flex items-center gap-2">
                          <MapPin className="h-4 w-4" /> {EDUCATION.city}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <Database className="h-4 w-4" /> GPA {EDUCATION.gpa}
                        </span>
                      </div>
                    </div>
                    {EDUCATION.photos?.length ? (
                      <div className="flex items-center gap-2">
                        {EDUCATION.photos.slice(0, 1).map((src) => (
                          <img
                            key={src}
                            src={src}
                            alt={`${EDUCATION.school} campus`}
                            className="h-24 w-24 rounded-lg border border-white/10 bg-white/80 object-contain p-2"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              </Section>

              <Section id="contact" title="Contact" subtitle="Let’s connect" icon={Mail}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="text-lg font-semibold">Open for internship / entry-level</div>
                      <div className="mt-1 text-sm text-slate-300"> Contact me and I’ll respond as soon as possible.</div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={PROFILE.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 hover:bg-white/10"
                      >
                        <Linkedin className="h-4 w-4" /> LinkedIn
                      </a>
                      <a
                        href={PROFILE.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200 hover:bg-white/10"
                      >
                        <Instagram className="h-4 w-4" /> Instagram
                      </a>
                    </div>
                  </div>
                </div>
              </Section>
            </div>

            <aside className="space-y-4 md:sticky md:top-24 md:h-fit">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-slate-100">Quick Links</div>
                <div className="mt-4 grid gap-2 text-sm">
                  {NAV.map((n) => (
                    <a
                      key={n.href}
                      href={n.href}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 hover:bg-white/10"
                    >
                      <span>{n.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-slate-400" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-slate-100">Profile</div>
                <div className="mt-4 text-sm text-slate-300">
                  <div className="font-medium text-slate-200">{PROFILE.name}</div>
                  <div className="mt-1">{PROFILE.role}</div>
                <div className="mt-3 flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {PROFILE.location}
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Mail className="h-4 w-4" /> {PROFILE.email}
                </div>
                <div className="mt-3 flex flex-col gap-2 text-slate-200">
                  <a
                    href={PROFILE.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white"
                  >
                    <Instagram className="h-4 w-4" /> @farelptra1
                  </a>
                  <a
                    href={`tel:${PROFILE.phone}`}
                    className="inline-flex items-center gap-2 hover:text-white"
                  >
                    <Phone className="h-4 w-4" /> {PROFILE.phone}
                  </a>
                </div>
                </div>
              </div>
            </aside>
          </div>

          <footer className="mt-14 border-t border-white/10 pt-8 text-sm text-slate-400">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <span>© {new Date().getFullYear()} {PROFILE.name}</span>
              <span className="text-xs">Built with React + Tailwind</span>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

function Stat({ label, value, icon: Icon }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <Icon className="h-5 w-5 text-slate-200" />
        </div>
        <div>
          <div className="text-xs text-slate-400">{label}</div>
          <div className="text-base font-semibold text-white">{value}</div>
        </div>
      </div>
    </div>
  );
}

function SkillBlock({ title, items }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-sm font-semibold text-slate-100">{title}</div>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((s) => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>
    </div>
  );
}
