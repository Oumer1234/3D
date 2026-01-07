import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-secondary text-sm">
          Built following "Build and Deploy an Amazing 3D Web Developer
          Portfolio in React JS | Beginner Three.js Tutorial" —&nbsp;
          <a
            href="https://www.youtube.com/watch?v=example"
            target="_blank"
            rel="noreferrer"
            className="text-Green underline"
          >
            Build and Deploy an Amazing 3D Web Developer Portfolio in React JS |
            Beginner Three.js Tutorial
          </a>
        </p>

        <p className="text-secondary text-sm mt-2">
          3D models from: &nbsp;
          <a
            href="https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66"
            target="_blank"
            rel="noreferrer"
            className="text-Green underline"
          >
            Yolala3D | Y3D on Sketchfab
          </a>
          ,&nbsp;
          <a
            href="https://sketchfab.com/3d-models/truth-about-the-dark-side-of-the-moon-33502f4cf5724096a8c03fcdd68d8b68"
            target="_blank"
            rel="noreferrer"
            className="text-Green underline"
          >
            SebastianSosnowski on Sketchfab
          </a>
        </p>

        <p className="text-secondary text-xs mt-3">
          © {new Date().getFullYear()} — Built by Den
        </p>
      </div>
    </footer>
  );
};

export default Footer;
