import { JSX } from 'solid-js';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: any;
  icon: JSX.Element;
  tags: string[];
  github: string;
  demo: string | null;
}