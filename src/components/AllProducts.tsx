import React from 'react';
import { fetchData, type Product } from '../services/api';
import Card from '../ui/Card';

export const AllProducts = () => {
  const [data, setData] = React.useState<Product[] | null>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<boolean>(false);

  React.useEffect(() => {
    const loadingProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchData();
        setData(data);
        setLoading(false);
      } catch (err) {
        console.log('Não foi possível carregas os produtos' + err);
        setLoading(false);
        setError(true);
      }
    };

    loadingProducts();
  }, []);

  return (
    <div className="content-center-personalized">
      <ul className="grid grid-cols-4 gap-8 items-center justify-center">
        {data?.map((data) => (
          <li key={data.id}>
            <Card
            id={data.id}
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