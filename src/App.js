import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Intro = lazy(() => import("./components/Intro"));
const MobileIntro = lazy(() => import("./components/MobileIntro"));
const MobileHeader = lazy(() => import("./components/MobileHeader"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  const mediaQuery = window.matchMedia("(max-width: 775px)");
  const [pixelated] = useState(mediaQuery.matches);

  return (
    <>
      <Router>
        {!pixelated && <Header />}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {pixelated ? (
              <Route path="/" exact element={<MobileIntro />} />
            ) : (
              <Route path="/" exact element={<Intro />} />
            )}
            <Route path="/about" exact element={<About />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/skills" exact element={<Skills />} />
          </Routes>
        </Suspense>
        {pixelated ? <MobileHeader /> : <Footer />}
      </Router>
    </>
  );
}

export default App;
