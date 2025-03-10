const Hero = () => {
  return (
    <section id="home" class="pt-32 pb-20 md:pt-40 md:pb-28">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            <span class="block">Hello, I'm</span>
            <span class="block text-blue-600 mt-2">Jane Doe</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
            A minimalist designer & developer focused on creating clean, 
            user-friendly experiences.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#projects" 
              class="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              class="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;