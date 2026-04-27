import { Link } from 'react-router-dom';
import imgBlusaPreta from '../assets/images/blusa_preta.jpeg';
import Button from '../ui/Button';

const Banner = () => {
  return (
    <div className="h-[600px] xl:h-[900px] w-full relative">
      <img
        className="h-full w-full object-cover object-top "
        src={imgBlusaPreta}
        alt="Blusa Roxa"
      ></img>
      <div className="absolute bottom-8 xl:bottom-24 gap-2 xl:gap-4 p-8 xl:p-8 flex flex-col">
        <h1 className="font-extrabold uppercase max-w-[13.5ch] text-[#ebebeb] w-full xl:text-6xl text-4xl bottom-80 shadow-black drop-shadow-xl">
          Essencial para o frio real<span className="span-destaque">.</span>
        </h1>
        <p className="text-[#ececec] w-full text-xl lg:text-2xl">
          Design limpo, caimento preciso e conforto que fala por si.
        </p>
        <div className="items-center">
          <Link to="/produtos">
            <Button text="Conheça nossos produtos" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
