import { Component } from 'solid-js';
import { Project } from '../types';
import { 
  ShoppingCartIcon, 
  LayoutDashboardIcon, 
  FileCodeIcon, 
  CameraIcon, 
  MessageSquareIcon, 
  PaletteIcon 
} from '../components/icons';

// Helper function to create icon components with consistent styling
const createIcon = (Icon: Component<{class?: string, size?: number}>) => (
  <Icon class="w-5 h-5 text-blue-400" />
);

export const projects: Project[] = [
  {
    id: 3,
    title: "ATS Resume Checker",
    description: "A browser-based code editor with syntax highlighting, auto-completion, and live preview functionality.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    icon: createIcon(FileCodeIcon),
    tags: ["Python", "FastApi", "NextJs","React","Tailwind", "PostgreSQL"],
    github: "https://github.com/iamrahulroyy/ats-checker-ui",
    demo: "https://ats-checker-ui-five.vercel.app/"
  },
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with product filtering, cart functionality, and sec.ure checkout process.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    icon: createIcon(ShoppingCartIcon),
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind", "Shadcn"],
    github: "https://github.com/iamrahulroyy/ecommerce-platform",
    demo: "https://ecommerce.netlify.com"
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "A comprehensive admin dashboard with data visualization, user management, and real-time analytics.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    icon: createIcon(LayoutDashboardIcon),
    tags: ["React", "TypeScript", "NexJs", "PostgreSQL", "Tailwind", "Shadcn"],
    github: "https://github.com/iamrahulroyy/admin-dashboard",
    demo: "https://admin-demo.netlify.com"
  },
  // {
  //   id: 4,
  //   title: "Photography Portfolio",
  //   description: "A minimalist photography portfolio with image galleries, filtering, and lightbox functionality.",
  //   image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //   icon: createIcon(CameraIcon),
  //   tags: ["React", "CSS Grid", "Framer Motion"],
  //   github: "https://github.com/username/photo-portfolio",
  //   demo: "https://photo-demo.example.com"
  // },
  // {
  //   id: 5,
  //   title: "Chat Application",
  //   description: "Real-time chat application with private messaging, group chats, and file sharing capabilities.",
  //   image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //   icon: createIcon(MessageSquareIcon),
  //   tags: ["React", "Socket.io", "Express", "MongoDB"],
  //   github: "https://github.com/username/chat-app",
  //   demo: "https://chat-demo.example.com"
  // },
  // {
  //   id: 6,
  //   title: "Design System",
  //   description: "A comprehensive design system with reusable components, documentation, and theming capabilities.",
  //   image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  //   icon: createIcon(PaletteIcon),
  //   tags: ["React", "Storybook", "Styled Components"],
  //   github: "https://github.com/username/design-system",
  //   demo: "https://design-system-demo.example.com"
  // }
];