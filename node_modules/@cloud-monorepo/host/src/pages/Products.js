
// # Create Products page with GraphQL integration
// 
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Card, Button } from '@cloud-monorepo/ui';

// GraphQL query
const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      description
      price
      inStock
    }
  }
`;

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p className="text-center py-10">Loading products...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error loading products: {error.message}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <p className="mb-6">These products are fetched from the GraphQL API.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.products.map(product => (
          <Card key={product.id} title={product.name}>
            <p className="mb-2">{product.description}</p>
            <p className="text-lg font-bold mb-2">\${product.price.toFixed(2)}</p>
            <p className={product.inStock ? "text-green-600" : "text-red-600"}>
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>
            <Button variant={product.inStock ? "primary" : "secondary"} className="mt-3">
              {product.inStock ? "Add to Cart" : "Notify Me"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;