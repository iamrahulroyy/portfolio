import { createSignal } from 'solid-js';

const Contact = () => {
  const [formData, setFormData] = createSignal({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = createSignal(false);
  const [submitted, setSubmitted] = createSignal(false);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData({
      ...formData(),
      [target.name]: target.value
    });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData());
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset submission status after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <section id="contact" class="py-20">
      <div class="container mx-auto px-4 md:px-6">
        <h2 class="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div class="max-w-3xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 class="text-xl font-semibold mb-4">Contact Information</h3>
              <p class="text-gray-600 mb-6">
                Feel free to reach out if you're looking for a designer, have a question, or just want to connect.
              </p>
              
              <div class="space-y-4">
                <div class="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-5 w-5 text-blue-600 mt-0.5 mr-3" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                    />
                  </svg>
                  <div>
                    <h4 class="text-sm font-medium text-gray-900">Email</h4>
                    <a href="mailto:hello@example.com" class="text-gray-600 hover:text-blue-600 transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-5 w-5 text-blue-600 mt-0.5 mr-3" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                    />
                  </svg>
                  <div>
                    <h4 class="text-sm font-medium text-gray-900">Phone</h4>
                    <a href="tel:+1234567890" class="text-gray-600 hover:text-blue-600 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div class="flex items-start">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-5 w-5 text-blue-600 mt-0.5 mr-3" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                    />
                    <path 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                    />
                  </svg>
                  <div>
                    <h4 class="text-sm font-medium text-gray-900">Location</h4>
                    <p class="text-gray-600">
                      San Francisco, CA
                    </p>
                  </div>
                </div>
              </div>
              
              <div class="mt-8">
                <h4 class="text-sm font-medium text-gray-900 mb-3">Connect</h4>
                <div class="flex space-x-4">
                  <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-5 w-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </a>
                  <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-5 w-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-5 w-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/>
                    </svg>
                  </a>
                  <a href="#" class="text-gray-600 hover:text-blue-600 transition-colors">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      class="h-5 w-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="text-xl font-semibold mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} class="space-y-4">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData().name}
                    onInput={handleChange}
                  />
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData().email}
                    onInput={handleChange}
                  />
                </div>
                
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData().message}
                    onInput={handleChange}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting()}
                  class="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
                >
                  {isSubmitting() ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitted() && (
                  <div class="mt-2 text-sm text-green-600 font-medium">
                    Your message has been sent successfully!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;