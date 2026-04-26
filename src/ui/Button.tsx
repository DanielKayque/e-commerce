import React from 'react';

const Button = () => {
  return (
    <div className="rounded-2xl border-4 hover:bg-opacity-40 hover:bg-black flex flex-col items-center w-fit px-4 py-2 xl:px-6 xl:py-3 cursor-pointer shadow-md shadow-black hover-suave">
      <p className="xl:text-2xl text-xl text-[#ececec] w-full whitespace-nowrap font-semibold">Conheça nossos produtos</p>
    </div>
  );
};

export default Button;
