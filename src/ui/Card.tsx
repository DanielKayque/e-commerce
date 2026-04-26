import type { Product } from '../services/api';

const Card = ({
  image,
  title,
  description,
  price,
}: Omit<Product, 'id' | 'rating' | 'category'>) => {
  return (
    <div className="bg-white h-full flex flex-col justify-between rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-32 lg:h-64 w-full bg-white p-4">
        <img
          className="object-contain h-full w-full bg-transparent"
          src={image}
          alt={title}
        />
      </div>

      <div className="p-4 gap-2 flex flex-col">
        <h3 className="text-xl font-bold text-[#212121] mb-2 line-clamp-2 min-h-[3rem]">
          {title}
        </h3>

        <p className="text-sm hidden lg:block capitalize text-gray-600 max-w-[44ch] line-clamp-2 max-h-[2.5rem]" title={description}>
          {description}
        </p>
        <p className="text-xl font-bold text-[#212121]">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
