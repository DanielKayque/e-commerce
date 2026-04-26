import { Gem, Heart, Package, User } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const SectionCategories = () => {
  type MenuItem = {
    label: string;
    icon: React.ComponentType<{ size: number; className: string }>;
    id: string;
  };

  const menuItems: MenuItem[] = [
    { label: 'Eletrônicos', icon: Package, id: 'electronics' },
    { label: 'Joias', icon: Gem, id: 'jewelery' },
    { label: 'Roupas Masculinas', icon: User, id: "men's clothing" },
    { label: 'Roupas Femininas', icon: Heart, id: "women's clothing" },
  ];

  const duplicateItems = [...menuItems, ...menuItems, ...menuItems];
  return (
    <div className="w-full overflow-hidden py-12">
      <ul className="flex w-max marquee gap-16 pr-8">
        {duplicateItems.map(({ label, icon: Icon, id }, index) => (
          <Link
            to={`/produto/categorias/${id}`}
            key={`${label}-${index}`}
            className="text-corpo cursor-pointer hover:opacity-70 transition-all flex items-center gap-2"
          >
            <Icon size={24} className="text-black" />
            <span className="ml-2">{label}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SectionCategories;
