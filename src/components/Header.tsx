import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="py-4 bg-[#ebebeb] flex h-[4rem] w-full px-2 shadow-xl shadow-black ">
      <button>
        <p className=''></p>
      </button>
      <div className="flex items-center justify-between px-8 w-full">
        <Link to="/" className="text-2xl font-bold text-[#212121]">
          Minha Loja
        </Link>
        <ul className="flex gap-12">
          <li className="text-corpo">Eletrônicos</li>
          <li className="text-corpo">Joias</li>
          <li className="text-corpo">Roupas Masculinas</li>
          <li className="text-corpo">Roupas Femininas</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
