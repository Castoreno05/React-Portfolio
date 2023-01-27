import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
const Intro = lazy(() => import("./components/Intro"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Intro />
            </React.Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="/projects"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Projects />
            </React.Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Skills />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
