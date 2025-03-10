import { Component } from 'solid-js';
import { Project } from '../types';
import { GithubIcon, ExternalLinkIcon } from './icons';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: Component<ProjectCardProps> = (props) => {
  return (
    <div class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-900/10 hover:translate-y-[-5px] transition-all duration-300">
      <div class="relative">
        <img 
          src={props.project.image} 
          alt={props.project.title} 
          class="w-full h-48 object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
        <div class="absolute top-3 left-3 bg-gray-900/80 p-2 rounded-full">
          {props.project.icon}
        </div>
      </div>
      
      <div class="p-5">
        <h3 class="text-xl font-bold text-white mb-2">{props.project.title}</h3>
        <p class="text-gray-400 text-sm mb-4 line-clamp-2 h-10">{props.project.description}</p>
        
        <div class="flex flex-wrap gap-2 mb-4">
          {props.project.tags.map(tag => (
            <span class="px-2 py-1 bg-gray-700 text-blue-300 text-xs rounded-full">
              {tag}
            </span>
          ))}
        </div>
        
        <div class="flex justify-between items-center pt-2 border-t border-gray-700">
          <a 
            href={props.project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1 text-sm"
          >
            <GithubIcon size={16} />
            <span>GitHub</span>
          </a>
          
          {props.project.demo && (
            <a 
              href={props.project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1 text-sm"
            >
              <ExternalLinkIcon size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;