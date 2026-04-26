export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
  category: string;
};

export const fetchData = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://fakestoreapi.com/products/');

    if (!response.ok) {
      throw new Error(`Erro na requisição dos dados:  + ${response.json}`);
    }

    const data: Product[] = await response.json();
    return data;
  } catch (e: unknown) {
    console.error('Erro no service: ' + e);
    throw e;
  }
};

export const getProducstLimit = async (): Promise<Product[]> => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=8');

    if (!response.ok) {
      throw new Error(`Erro na requisição dos dados:  + ${response.json}`);
    }

    const data: Product[] = await response.json();
    return data;
  } catch (e: unknown) {
    console.error('Erro no service: ' + e);
    throw e;
  }
};

export const fetchProductById = async (id: string): Promise<Product> => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    if (!response.ok) {
      throw new Error(`Erro na requisição dos dados:  + ${response.json}`);
    }

    const data: Product = await response.json();
    return data;
  } catch (e: unknown) {
    console.error('Erro no service: ' + e);
    throw e;
  }
};

export const fetchProductByCategories = async (
  id: string,
): Promise<Product[]> => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${id}`,
    );

    if (!response.ok) {
      throw new Error(`Erro na requisição dos dados:  + ${response.json}`);
    }

    const data: Product[] = await response.json();
    return data;
  } catch (e: unknown) {
    console.error('Erro no service: ' + e);
    throw e;
  }
};
