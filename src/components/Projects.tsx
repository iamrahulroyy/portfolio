import { createSignal, For } from 'solid-js';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Minimalist E-commerce",
      description: "A clean, modern e-commerce platform focused on user experience and conversion optimization.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["UI/UX", "React", "Node.js"],
      link: "#"
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A customizable portfolio template for designers and developers.",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Design", "HTML/CSS", "JavaScript"],
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A minimal task management application with a focus on simplicity and productivity.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["UI/UX", "React", "Firebase"],
      link: "#"
    },
    {
      id: 4,
      title: "Photography Website",
      description: "A minimalist photography portfolio with a focus on visual storytelling.",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      tags: ["Design", "HTML/CSS", "JavaScript"],
      link: "#"
    }
  ];

  const [activeProject, setActiveProject] = createSignal<number | null>(null);

  return (
    <section id="projects" class="py-20">
      <div class="container mx-auto px-4 md:px-6">
        <h2 class="text-3xl font-bold text-center mb-12">My Projects</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <For each={projects}>
            {(project) => (
              <div 
                class="group relative overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div class="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div class="p-6">
                  <h3 class="text-xl font-semibold mb-2">{project.title}</h3>
                  <p class="text-gray-600 mb-4">{project.description}</p>
                  
                  <div class="flex flex-wrap gap-2 mb-4">
                    <For each={project.tags}>
                      {(tag) => (
                        <span class="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      )}
                    </For>
                  </div>
                  
                  <a 
                    href={project.link} 
                    class="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    View Project
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-4 w-4 ml-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Projects;