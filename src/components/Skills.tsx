import { For } from 'solid-js';
import { 
  Palette, 
  PenTool, 
  GitBranch, 
  FileCode, 
  Settings, 
  Framer,
  Code, 
  Layers, 
  PaintBucket, 
  Share2, 
  Monitor,
  Database,
  Pyramid,
} from 'lucide-solid';

const Skills = () => {
  const skillCategories = [
    {
      title: "Design",
      icon: Palette,
      skills: [
        { name: "UI/UX Design", icon: PenTool },
        { name: "Wireframing", icon: Share2 },
        { name: "Prototyping", icon: Layers },
        { name: "Visual Design", icon: PaintBucket }
      ]
    },
    {
      title: "Development",
      icon: Code,
      skills: [
        { name: "HTML/CSS/JavaScript", icon: FileCode },
        { name: "Python/FastApi", icon: Layers },
        { name: "React", icon: Framer },
        { name: "PostgreSQL", icon: Database},
      ]
    },
    {
      title: "Tools",
      icon: Settings,
      skills: [
        { name: "Figma", icon: Framer },
        { name: "Git", icon: GitBranch },
        { name: "VS Code", icon: Monitor },
        { name: "Linux", icon: Pyramid }
      ]
    }
  ];

  return (
    <section id="skills" class="py-20 bg-gray-900">
      <div class="container mx-auto px-4 md:px-6">
        <h2 class="text-3xl font-bold text-center mb-12 text-white">
          <span class="relative inline-block">
            Skills & Expertise
            <span class="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </span>
        </h2>
        
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <For each={skillCategories}>
            {(category) => (
              <div class="bg-gray-800 p-8 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                <div class="text-center mb-8">
                  <category.icon class="w-8 h-8 mx-auto text-amber-400 mb-4" />
                  <h3 class="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                
                <div class="space-y-6">
                  <For each={category.skills}>
                    {(skill) => (
                      <div class="group flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-700 transition-all duration-300">
                        <div class="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                          <skill.icon class="w-5 h-5 text-teal-400 group-hover:scale-110 transition-transform" />
                        </div>
                        <span class="text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                      </div>
                    )}
                  </For>
                </div>
              </div>
            )}
          </For>
        </div>
      </div>
    </section>
  );
};

export default Skills;