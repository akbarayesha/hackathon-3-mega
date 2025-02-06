import { createClient } from '@sanity/client';
import { Product } from './type';

const client = createClient({
  projectId: 'u13fkxvw',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
});
export const fetchProducts = async (): Promise<Product[]> => {
  const query = `*[_type == "product"]{
    _id,
    title,
    description,
    price,
    productImage{
      asset->{
        url
      }
    },
    tags,
    discountPercentage,
    isNew
  }`;
    
  try {
    const products: Product[] = await client.fetch(query);
    return products;
  } catch (error) {
    console.error('Error fetching products from Sanity:', error);
    return [];
  }
};
