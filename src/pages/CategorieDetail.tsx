import React from 'react';
import {
  fetchData,
  fetchProductByCategories,
  type Product,
} from '../services/api';
import Card from '../ui/Card';
import { useParams } from 'react-router-dom';

export const CategoriesDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [data, setData] = React.useState<Product[] | null>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    const loadingProducts = async () => {
      try {
        if (!id) {
          throw new Error('ID da categoria não fornecido');
        }
        setLoading(true);
        const data = await fetchProductByCategories(id);
        setData(data);
        setLoading(false);
      } catch (err) {
        console.log('Não foi possível carregas os produtos' + err);
        setLoading(false);
        setError(true);
      }
    };

    loadingProducts();
  }, [id]);

  return (
    <div className="h-svh bg-[#ebebeb] flex flex-col items-center justify-start gap-12 p-8">
      <h1 className="text-6xl font-extrabold text-[#212121]">
        Categoria: {id}
      </h1>
      <ul className="grid grid-cols-4 gap-4 items-center justify-center">
        {data?.map((data) => (
          <li key={data.id}>
            <Card
              key={data.id}
              image={data.image}
              title={data.title}
              description={data.description}
              price={data.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
