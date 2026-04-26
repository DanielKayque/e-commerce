import React, { use, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../ui/Card';
import { getProducstLimit, type Product } from '../services/api';

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [products, setProducts] = React.useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducstLimit();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    fetchProducts();
  }, []);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const getProductClasses = (index: number) => {
    if (index === currentIndex) {
      return 'scale-100 blur-0 opacity-100';
    } else {
      return 'scale-90 blur-sm opacity-60';
    }
  };

  return (
    <div className="w-full py-8 px-4">
      <div className="relative flex items-center justify-center gap-4">
        {/* Left Button */}
        <button
          onClick={prevProduct}
          className="absolute left-0 z-10 p-2 bg-[#212121] text-white rounded-full hover:bg-opacity-80 transition-all"
          aria-label="Previous product"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Products Container */}
        <div className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 justify-center w-full px-16">
          {products.map((product, id) => (
            <div
              key={product.id}
              className={`flex-shrink-0 w-64 transition-all duration-300 ${getProductClasses(id)}`}
            >
              <Card
                image={product.image}
                title={product.title}
                description={product.description}
              />
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={nextProduct}
          className="absolute right-0 z-10 p-2 bg-[#212121] text-white rounded-full hover:bg-opacity-80 transition-all"
          aria-label="Next product"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {products.map((products, id) => (
          <button
            key={id}
            onClick={() => setCurrentIndex(id)}
            className={`h-2 rounded-full transition-all ${
              id === currentIndex ? 'bg-[#212121] w-8' : 'bg-gray-300 w-2'
            }`}
            aria-label={`Go to product ${id + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
