import { createSignal, onMount, Show } from 'solid-js';

interface HeaderProps {
  activeSection: () => string;
  onNavigate: (section: string) => void;
}

const Header = (props: HeaderProps) => {
  const [scrolled, setScrolled] = createSignal(false);
  const [menuOpen, setMenuOpen] = createSignal(false);

  const toggleMenu = () => setMenuOpen(!menuOpen());

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  onMount(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <header 
      class={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled() ? 'bg-zinc-900/95 backdrop-blur-sm shadow-md shadow-black/20 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div class="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="#about" class="text-xl font-bold tracking-tight">
          <span class="text-slate-50">Rahul</span>
          <span class="text-indigo-500"> Roy</span>
        </a>

        {/* Desktop Navigation */}
        <nav class="hidden md:flex space-x-8">
          {navItems.map(item => (
            <a 
              href={`#${item.id}`}
              class={`text-lg font-medium transition-colors hover:text-indigo-400 ${
                props.activeSection() === item.id ? 'text-indigo-400' : 'text-gray-300'
              }`}
              onClick={(e) => {
                e.preventDefault();
                props.onNavigate(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          class="md:hidden text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d={menuOpen() ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <Show when={menuOpen()}>
        <nav class="md:hidden bg-gray-800/95 backdrop-blur-sm absolute top-full left-0 w-full py-3 px-4 border-t border-gray-700/50">
          <div class="flex flex-col space-y-4">
            {navItems.map(item => (
              <a 
                href={`#${item.id}`}
                class={`text-lg font-medium transition-colors hover:text-indigo-400 ${
                  props.activeSection() === item.id ? 'text-indigo-400' : 'text-gray-300'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  props.onNavigate(item.id);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </Show>
    </header>
  );
};

export default Header;