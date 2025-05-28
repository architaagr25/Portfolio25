
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/ProjectsSection";
import Contacts from "./components/Contacts";
export default function Home() {
  return (

    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
        <div className="container mt-24 mx-auto px-12 py-4">
          <Hero />
        </div>
        <About/>
        <Projects/>
        <Contacts/>
        
    </main>
  );
}
