import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/ProjectsSection";
import Achievements from "./components/Achievements";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
      </div>
      <About/>
      <Experience/>
      <Projects/>
      <Achievements/>
      <Contacts/>
      <Footer/>
    </main>
  );
}