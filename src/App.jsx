import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleField from './components/ParticleField';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Ambient background layers */}
      <div className="mesh-gradient" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />
      <ParticleField />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;