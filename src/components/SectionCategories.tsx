import { Gem, Heart, Package, User } from 'lucide-react';
import React from 'react';

const SectionCategories = () => {
  const menuItems = [
    { label: 'Eletrônicos', icon: Package },
    { label: 'Joias', icon: Gem },
    { label: 'Roupas Masculinas', icon: User },
    { label: 'Roupas Femininas', icon: Heart },
  ];

  const duplicateItems = [...menuItems, ...menuItems, ...menuItems];
  return (
    <div className="w-full overflow-hidden py-12">
      <ul className="flex w-max marquee gap-16 pr-8">
        {duplicateItems.map(({ label, icon: Icon }, index) => (
          <li
            key={`${label}-${index}`}
            className="text-corpo cursor-pointer hover:opacity-70 transition-all flex items-center gap-2"
          >
            <Icon size={24} className="text-black" />
            <span className="ml-2">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionCategories;
