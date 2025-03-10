import { createSignal, onMount } from 'solid-js';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';
// import avatar from './components/icons/avatar.png';
import avatar from './components/icons/avatar1.png';
import  Skills  from './components/Skills'


const App = () => {
  const [activeSection, setActiveSection] = createSignal('about');
  const [hoveredSkill, setHoveredSkill] = createSignal<string | null>(null);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  onMount(() => {
    if (window.location.hash) {
      const section = window.location.hash.substring(1);
      handleNavigation(section);
    }

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
          history.replaceState(null, '', `#${entry.target.id}`);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  });

  return (
    <div class="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Header activeSection={activeSection} onNavigate={handleNavigation} />
      
      <main>
        <section id="about" class="pt-32 pb-20 px-4">
          <div class="max-w-4xl mx-auto text-center">
            <div class="mb-8 relative">
              <div class="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-500 p-1">
                <img
                  src={avatar}
                  alt="Rahul Roy"
                  class="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
              RAHUL ROY
            </h1>
            <p class="text-2xl text-blue-400 mb-8">Full-Stack Developer</p>
            <div class="max-w-2xl mx-auto">
              <p class="text-gray-300 leading-relaxed text-lg">
                I build modern, responsive web applications with a focus on clean code and intuitive user experiences.
                Specializing in FastAPI, React, Node.js, and modern JavaScript, I create solutions that are both aesthetically pleasing and functional.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" class="py-20 px-4 bg-gray-850">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 text-white">
              <span class="relative inline-block">
                Featured Projects
                <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              </span>
            </h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard project={project} />
              ))}
            </div>
          </div>
        </section>
        
        <Skills />

        <section id="contact" class="py-20 px-4 ">
          <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-12 text-white">
              <span class="relative inline-block">
                Get In Touch
                <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              </span>
            </h2>
            
            <div class="bg-gray-900 p-2 rounded-lg text-center">
              <p class="text-gray-300 text-lg mb-8">
                Interested in working together? Let's discuss your project and see how I can help.
              </p>
              <a 
                href="mailto:rahulroy.agtt@gmail.com" 
                class="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:opacity-90 transition-opacity"
              >
                Send Message
              </a>
              
              {/* github */}
              <div class="flex justify-center space-x-8 mt-12">
                <a href="https://github.com/iamrahulroyy" class="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                {/* linkedin */}
                <a href="https://www.linkedin.com/in/iamrahulroyy/" class="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
                {/* twitter */}
                <a href="https://x.com/iamrahulroyy" class="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;