import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, Gem, User, Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { label: 'Eletrônicos', icon: Package, path: 'electronics' },
    { label: 'Joias', icon: Gem, path: 'jewelery' },
    { label: 'Roupas Masculinas', icon: User, path: "men's clothing" },
    { label: 'Roupas Femininas', icon: Heart, path: "women's clothing" },
  ];

  const handleCategoryClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="py-4 bg-[#ebebeb] flex h-[4rem] w-full px-2 shadow-xl shadow-black">
        <div className="flex items-center justify-between px-8 w-full">
          <Link to="/" className="text-2xl font-bold text-[#212121]">
            Minha Loja
          </Link>

          {/* Desktop - Texto */}
          <ul className="hidden md:flex gap-12">
            {categories.map(({ label, path }) => (
              <Link
                key={path}
                to={`/produto/categorias/${path}`}
                className="text-corpo"
              >
                {label}
              </Link>
            ))}
          </ul>

          {/* Mobile - Menu Hamburger */}
          <button
            className="md:hidden text-[#212121] hover:opacity-70 transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X color="#000" size={24} />
            ) : (
              <Menu color="#000" size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* Sidebar Modal - Mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar */}
          <div className="absolute left-0 top-0 h-full w-64 bg-[#ebebeb] shadow-lg z-50">
            <div className="flex flex-col p-4 gap-4">
              <button
                className="text-[#000] hover:opacity-70 transition-all self-end"
                onClick={() => setIsOpen(false)}
              >
                <X color="#000" size={24} />
              </button>

              <ul className="flex flex-col gap-4">
                {categories.map(({ label, icon: Icon, path }) => (
                  <Link
                    key={path}
                    to={`/produto/categorias/${path}`}
                    className="flex items-center gap-3 text-[#212121] hover:opacity-70 transition-all p-2 rounded"
                    onClick={handleCategoryClick}
                  >
                    <Icon color="#000" size={20} />
                    <span className="text-corpo">{label}</span>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
