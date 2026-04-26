import React, { useEffect } from 'react';
import { fetchData, type Product } from '../services/api';
import Card from '../ui/Card';

const BestAvailables = () => {
  const [data, setData] = React.useState<Product[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchData();
        console.log(data);

        const sorted = [...data].sort((a, b) => b.rating.rate - a.rating.rate);
        setData(sorted.slice(0, 8));
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="content-center-personalized">
      <div>
        <h1 className="font-extrabold uppercase text-[#212121] text-6xl">
          MELHORES AVALIADOS<span className="span-destaque">:</span>
        </h1>
      </div>
      <ul className="grid grid-cols-4 gap-4">
        {data?.map((product) => (
          <Card
          id={product.id}
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default BestAvailables;
