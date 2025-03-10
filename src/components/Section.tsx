import { JSX } from 'solid-js';

interface SectionProps {
  id: string;
  title: string;
  content: JSX.Element;
}

const Section = (props: SectionProps) => {
  return (
    <section id={props.id} class="py-16 border-b border-gray-800">
      <h2 class="text-2xl font-bold text-center mb-10 text-white relative inline-block mx-auto">
        {props.title}
        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform -translate-y-2"></span>
      </h2>
      {props.content}
    </section>
  );
};

export default Section;