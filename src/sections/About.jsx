import React from "react";
import aboutImg from "../assets/hero12.jpg"; // or use a URL
import ScrollAnimationWrapper from "../components/ScrollAnimationWrapper";

const About = () => {
  return (
      <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-24 bg-transparent relative"
    >
      {/* ✨ Glow Effect Behind Section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-blue-950/40 blur-3xl -z-10"></div>

      {/* 📝 Left: Text */}
      <ScrollAnimationWrapper direction="left" delay={0}>
        <div className="flex-1 glass p-8 md:p-12 fade-up">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-300 drop-shadow-lg">
          About <span className="text-blue-500">XpertStrikes</span>
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed mb-4">
          At <span className="text-blue-400 font-semibold">XpertStrikes</span>, we are a passionate
          team dedicated to redefining SaaS innovation. Our solutions are built
          to empower startups and enterprises with seamless cloud, automation,
          and AI-driven tools.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          We believe in simplicity, scalability, and smart design — delivering
          solutions that grow with your business and keep you ahead of the curve.
        </p>
        <a
          href="#services"
          className="inline-block px-8 py-3 bg-blue-500 hover:bg-white text-white hover:text-blue-500 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:border-blue-500 hover:scale-110"
        >
          Learn More
        </a>
      </div>
      </ScrollAnimationWrapper>

      {/* 🖼️ Right: Image */}
      <ScrollAnimationWrapper direction="right" delay={0.3}>
        <div className="flex-1 flex justify-center fade-up delay-200">
        <img
          src={aboutImg}
          alt="About XpertStrikes"
          className="w-100 md:w-[60vw] rounded-2xl shadow-2xl glass p-2 hover:scale-105 transition-transform duration-700"
        />
      </div>
      </ScrollAnimationWrapper>
    </section>
  );
};

export default About;
