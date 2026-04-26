import React from 'react';
import { Package, Gem, User, Heart, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setIsOpen(false);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const menuItems = [
    { label: 'Eletrônicos', icon: Package },
    { label: 'Joias', icon: Gem },
    { label: 'Roupas Masculinas', icon: User },
    { label: 'Roupas Femininas', icon: Heart },
  ];

  return (
    <>
      {/* Hamburger Button - Mobile Only */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed md:hidden top-4 left-4 z-20 p-2 bg-transparent border-none cursor-pointer hover:bg-gray-200 rounded"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={24} className="text-black" />
        ) : (
          <Menu size={24} className="text-black" />
        )}
      </button>

      {/* Navigation */}
      <nav
        style={{
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        }}
        className="py-6 px-4 bg-[#ebebeb] w-56 fixed left-0 top-0 h-screen z-10 transition-transform duration-300 ease-out shadow-xl shadow-black md:static md:w-full md:h-auto md:flex md:flex-row md:items-center md:justify-between md:shadow-none md:px-6 md:py-4"
      >
        {/* Logo - Mobile and Desktop */}
        <h1 className="text-2xl font-bold text-[#212121] mt-12 md:mt-0 md:text-xl">
          Minha Loja
        </h1>

        {/* Menu Items */}
        <ul className="flex flex-col gap-8 mt-8 md:flex-row md:gap-6 md:mt-0 md:items-center">
          {menuItems.map(({ label, icon: Icon }) => (
            <li
              key={label}
              className="text-corpo cursor-pointer hover:opacity-70 transition-all"
            >
              {/* Icon - Mobile Only */}
              <div className="md:hidden">
                <Icon size={24} className="text-[#212121]" />
              </div>

              {/* Text - Desktop Only */}
              <span className="hidden md:inline text-sm">{label}</span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Overlay - Click to close menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-5 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
