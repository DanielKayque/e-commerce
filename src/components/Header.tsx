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
          <Link to={`/produto/categorias/electronics`} className="text-corpo">Eletrônicos</Link>
          <Link to={`/produto/categorias/jewelery`} className="text-corpo">Joias</Link>
          <Link to={`/produto/categorias/men's clothing`} className="text-corpo">Roupas Masculinas</Link>
          <Link to={`/produto/categorias/women's clothing`} className="text-corpo">Roupas Femininas</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
