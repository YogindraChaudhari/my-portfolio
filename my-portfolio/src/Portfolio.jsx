import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaJava, FaAws } from "react-icons/fa";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  ExternalLink,
  Download,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiPostman,
  SiPython,
  SiLinux,
  SiPostgresql,
  SiSupabase,
  SiOracle,
  SiXampp,
} from "react-icons/si";
import { FaCloud } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import cv from "./assets/CV_Yogindra_Chaudhari.pdf";
import "./Portfolio.css";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/YogindraChaudhari",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yogindra-chaudhari-85719125a/",
      icon: Linkedin,
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/YogindraChaudhari/",
      icon: Code,
    },
    {
      name: "Email",
      url: "mailto:yogindrachaudhari816@gmail.com",
      icon: Mail,
    },
  ];

  const skills = [
    {
      category: "Languages",
      items: [
        { name: "HTML", icon: SiHtml5, color: "text-amber-400" },
        { name: "CSS", icon: SiCss3, color: "text-stone-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-amber-400" },
        { name: "Java", icon: FaJava, color: "text-stone-400" },
        { name: "SQL", icon: SiMysql, color: "text-amber-400" },
        { name: "Python", icon: SiPython, color: "text-stone-400" },
        { name: "Linux", icon: SiLinux, color: "text-white" },
      ],
    },
    {
      category: "Frameworks",
      items: [
        { name: "React.js", icon: FaReact, color: "text-amber-400" },
        { name: "Node.js", icon: FaNodeJs, color: "text-stone-400" },
        { name: "Express.js", icon: SiExpress, color: "text-white" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-amber-400" },
      ],
    },
    {
      category: "Cloud & DB",
      items: [
        { name: "Azure", icon: FaCloud, color: "text-stone-400" },
        { name: "AWS", icon: FaAws, color: "text-amber-400" },
        { name: "Oracle", icon: SiOracle, color: "text-stone-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-amber-400" },
        { name: "MySQL", icon: SiMysql, color: "text-stone-400" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-amber-400" },
        { name: "Supabase", icon: SiSupabase, color: "text-stone-400" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Figma", icon: SiFigma, color: "text-amber-400" },
        { name: "Git", icon: SiGit, color: "text-stone-400" },
        { name: "GitHub", icon: SiGithub, color: "text-white" },
        { name: "Docker", icon: SiDocker, color: "text-amber-400" },
        { name: "Postman", icon: SiPostman, color: "text-stone-400" },
        { name: "XAMPP", icon: SiXampp, color: "text-amber-400" },
        { name: "VS Code", icon: VscVscode, color: "text-stone-400" },
      ],
    },
  ];

  const projects = [
    {
      title: "Digital Book Store",
      date: "May 2025",
      tech: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
      description:
        "Designed a secure full-stack platform with user registration, JWT authentication, book listings, reviews, shopping cart, and order workflows. Built robust RESTful APIs supporting CRUD operations, server-side validation, pagination, and role-based access control.",
      liveUrl: "https://digital-book-store.vercel.app/",
      code: "https://github.com/YogindraChaudhari/DigitalBookStore",
      features: [
        "JWT Authentication",
        "Shopping Cart",
        "RESTful APIs",
        "Role-based Access",
      ],
    },
    {
      title: "Product Advisor",
      date: "Apr 2025",
      tech: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Express",
        "Supabase",
        "Zustand",
      ],
      description:
        "Created an AI-powered recommendation app integrating Gemini APIs with seamless fallback logic. Implemented secure Supabase authentication, protected routes, and personalized advice history management.",
      liveUrl: "https://product-advisor-red.vercel.app/",
      code: "https://github.com/YogindraChaudhari/Product-Advisor",
      features: ["AI-Powered", "PWA", "Gemini API", "Supabase Auth"],
    },
    {
      title: "JobScape",
      date: "Sept 2024",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      description:
        "Developed a job listing platform featuring RESTful CRUD APIs, structured data modelling, and real-time data flow. Built intuitive, mobile-friendly interfaces with modular development practices.",
      liveUrl: "https://job-scape.vercel.app/",
      code: "https://github.com/YogindraChaudhari/JobScape",
      features: [
        "Job Listings",
        "Real-time Data",
        "Mobile-friendly",
        "CRUD Operations",
      ],
    },
    {
      title: "IMDB Clone",
      date: "May 2024",
      tech: ["JavaScript", "React.js", "Redux", "Tailwind CSS"],
      description:
        "Built a movie discovery app with real-time search, TMDB API integration, and dynamic detail pages. Enhanced UX with theme toggling, animated UI elements, and responsive modals.",
      liveUrl: "https://imdb-theta-lac.vercel.app/",
      code: "https://github.com/YogindraChaudhari/IMDB",
      features: ["TMDB API", "Redux State", "Theme Toggle", "Animated UI"],
    },
  ];

  const menuItems = ["Hero", "About", "Skills", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-black/20 to-stone-900/20" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-yellow-400/10 via-transparent to-zinc-400/10"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(253, 224, 71, 0.1), transparent, rgba(161, 161, 170, 0.1))",
              "linear-gradient(225deg, rgba(161, 161, 170, 0.1), transparent, rgba(253, 224, 71, 0.1))",
              "linear-gradient(45deg, rgba(253, 224, 71, 0.1), transparent, rgba(161, 161, 170, 0.1))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-zinc-300 bg-clip-text text-transparent"
            style={{ fontFamily: "Inter, system-ui" }}
          >
            Yogindra Chaudhari
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-3 py-2 text-sm transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-yellow-400"
                    : "text-zinc-300 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-zinc-300"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 border-t border-gray-800"
            >
              {menuItems.map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-6 py-3 text-zinc-300 hover:text-yellow-400 hover:bg-zinc-900/50"
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6"
              style={{ fontFamily: "Inter, system-ui" }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-zinc-300 bg-clip-text text-transparent">
                Yogindra Chaudhari
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-2xl md:text-4xl text-zinc-300 mb-8"
              style={{ fontFamily: "Space Grotesk, system-ui" }}
            >
              Full Stack Developer
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12"
              style={{ fontFamily: "Inter, system-ui" }}
            >
              Crafting exceptional digital experiences with modern web
              technologies
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-full hover:border-yellow-400 transition-all group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                >
                  <link.icon className="w-5 h-5 group-hover:text-yellow-400 transition-colors" />
                  <span className="group-hover:text-yellow-400 transition-colors">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={() => scrollToSection("about")}
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-zinc-400 hover:text-yellow-400 transition-colors"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-zinc-300 bg-clip-text text-transparent"
              style={{ fontFamily: "Inter, system-ui" }}
            >
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-zinc-300 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6">
              <p
                className="text-lg text-zinc-300 leading-relaxed"
                style={{ fontFamily: "Inter, system-ui" }}
              >
                I'm a passionate full-stack developer with expertise in modern
                web technologies. I like creating seamless user experiences and
                robust backend systems.
              </p>
              <p
                className="text-lg text-zinc-300 leading-relaxed"
                style={{ fontFamily: "Inter, system-ui" }}
              >
                With a strong foundation in both frontend and backend
                development, I specialize in building scalable applications
                using React, Node.js, and various cloud platforms.
              </p>
              <motion.a
                href={cv}
                download="CV_Yogindra_Chaudhari.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </div>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-square bg-gradient-to-br from-yellow-500/20 to-zinc-600/20 rounded-2xl backdrop-blur-sm border border-zinc-700 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-zinc-300 bg-clip-text text-transparent"
              style={{ fontFamily: "Inter, system-ui" }}
            >
              Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-zinc-300 mx-auto"></div>
          </motion.div>

          {/* Marquee Container for all categories */}
          <div className="space-y-12 md:space-y-16">
            {skills.map((skillGroup, index) => (
              <div key={skillGroup.category}>
                <motion.h3
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-bold mb-6 text-zinc-300"
                >
                  {skillGroup.category}
                </motion.h3>
                <div className="relative w-full overflow-hidden">
                  <div
                    className={`flex w-fit ${
                      index % 2 === 0
                        ? "animate-marquee"
                        : "animate-marquee-reverse"
                    }`}
                  >
                    {[...skillGroup.items, ...skillGroup.items].map(
                      (skill, itemIndex) => (
                        <motion.div
                          key={`${skillGroup.category}-${itemIndex}`}
                          className="flex-shrink-0 mx-4 md:mx-6"
                        >
                          <div className="flex flex-col items-center justify-center p-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-xl shadow-lg transition-all duration-300 w-28 h-28 md:w-32 md:h-32 group">
                            <skill.icon
                              className={`text-4xl md:text-5xl mb-2 ${skill.color} group-hover:scale-110 transition-transform`}
                            />
                            <span className="text-zinc-300 font-medium text-sm text-center">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Add a fade-out effect with gradients */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black via-black/0 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black via-black/0 to-transparent z-10 pointer-events-none"></div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-zinc-300 bg-clip-text text-transparent"
              style={{ fontFamily: "Inter, system-ui" }}
            >
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-zinc-300 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-2xl p-8 hover:border-yellow-400/50 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors"
                    style={{ fontFamily: "Space Grotesk, system-ui" }}
                  >
                    {project.title}
                  </h3>
                  <span className="text-zinc-400 text-sm">{project.date}</span>
                </div>

                <p className="text-zinc-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-800 text-yellow-400 text-sm rounded-full border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-zinc-900/30 text-zinc-400 text-sm rounded-full border border-zinc-700/50"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-yellow-500/25 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-sm font-semibold hover:border-yellow-400 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-zinc-300 bg-clip-text text-transparent"
              style={{ fontFamily: "Inter, system-ui" }}
            >
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-zinc-300 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-lg text-zinc-300 mb-12 leading-relaxed">
              I'm always open to discussing new opportunities and interesting
              projects. Let's connect and create something amazing together!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-4 p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-2xl hover:border-yellow-400/50 transition-all group"
                >
                  <link.icon className="w-6 h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <div className="font-semibold text-white group-hover:text-yellow-400 transition-colors">
                      {link.name}
                    </div>
                    <div className="text-sm text-zinc-400">
                      {link.name === "Email"
                        ? "yogindrachaudhari816@gmail.com"
                        : `@${link.name}`}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-400"
          >
            <p>&copy; 2025 Yogindra Chaudhari. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Built with React, Tailwind CSS & Framer Motion
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-zinc-300 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default Portfolio;
