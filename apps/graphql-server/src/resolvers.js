// Mock data
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' }
];

const products = [
  { id: '1', name: 'Laptop', description: 'High-performance laptop', price: 999.99, inStock: true },
  { id: '2', name: 'Smartphone', description: 'Latest model', price: 699.99, inStock: true },
  { id: '3', name: 'Headphones', description: 'Noise-cancelling', price: 149.99, inStock: false }
];

// Resolvers
const resolvers = {
  Query: {
    users: () => users,
    user: (_, { id }) => users.find(user => user.id === id),
    products: () => products,
    product: (_, { id }) => products.find(product => product.id === id)
  },
  Mutation: {
    addUser: (_, { name, email }) => {
      const newUser = {
        id: String(users.length + 1),
        name,
        email
      };
      users.push(newUser);
      return newUser;
    },
    addProduct: (_, { name, description, price, inStock }) => {
      const newProduct = {
        id: String(products.length + 1),
        name,
        description,
        price,
        inStock
      };
      products.push(newProduct);
      return newProduct;
    }
  }
};

module.exports = resolvers;