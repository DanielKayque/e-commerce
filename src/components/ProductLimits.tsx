import React, { useEffect } from 'react';
import { getProducstLimit, type Product } from '../services/api';
import Card from '../ui/Card';

const ProductLimits = () => {
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const data = await getProducstLimit();
        setProducts(data);
        console.log(data);
      };
      fetchProducts();
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
  }, []);

  return (
    <div className="content-center-personalized">
      <div>
        <h1 className="font-extrabold uppercase text-[#212121] text-6xl">
          Nossos produtos<span className="span-destaque">:</span>
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ul key={product.id} className="">
            <Card
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ProductLimits;
