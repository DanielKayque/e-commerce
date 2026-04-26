import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById, type Product } from '../services/api';

const ProdutoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = React.useState<Product | null>(null);
  console.log(id);

  useEffect(() => {
    if (!id) return;
    const loadProduct = async () => {
      try {
        const detailedProduct = await fetchProductById(id);
        console.log(detailedProduct);
        setData(detailedProduct);
      } catch (error) {
        console.error('Erro ao carregar detalhes do produto:', error);
      }
    };

    loadProduct();
  }, [id]);

  return (
    <div>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white p-10 rounded-xl border flex justify-center items-center">
          <img
            src={data?.image}
            alt={data?.title}
            className="max-h-96 object-contain"
          />
        </div>

        <div className="flex flex-col justify-center">
          <span className="text-sm text-gray-500 uppercase tracking-widest mb-2">
            {data?.category}
          </span>
          <h1 className="text-6xl font-extrabold text-[#ebebeb] mb-4">
            {data?.title}
          </h1>
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-yellow-400 px-2 py-1 rounded text-xs font-bold">
              ⭐ {data?.rating.rate}
            </span>
            <span className="text-gray-400 text-sm">
              ({data?.rating.count} avaliações)
            </span>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">
            {data?.description}
          </p>
          <div className="text-3xl font-bold mb-8">
            R$ {data?.price.toFixed(2)}
          </div>
          <button className="w-full md:w-max bg-black text-white px-12 py-4 rounded-full font-bold hover:bg-gray-800 transition-all">
            Adicionar à Sacola
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProdutoDetail;
