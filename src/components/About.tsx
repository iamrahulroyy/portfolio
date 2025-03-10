const About = () => {
  return (
    <section id="about" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-12">About Me</h2>
          
          <div class="flex flex-col md:flex-row gap-10 items-center">
            <div class="md:w-1/3">
              <div class="aspect-square rounded-full overflow-hidden bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Profile" 
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div class="md:w-2/3">
              <p class="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate designer and developer with over 5 years of experience creating 
                beautiful, functional websites and applications. My approach combines clean aesthetics 
                with intuitive user experiences.
              </p>
              <p class="text-gray-600 mb-6 leading-relaxed">
                After graduating with a degree in Design & Computer Science, I've worked with 
                startups and established companies to bring their digital products to life. 
                I believe in minimalism not just as an aesthetic choice, but as a philosophy 
                that guides my work toward clarity and purpose.
              </p>
              <p class="text-gray-600 leading-relaxed">
                When I'm not designing or coding, you'll find me hiking, reading, or experimenting 
                with film photography.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;