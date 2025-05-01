const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
    inStock: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
    addProduct(name: String!, description: String, price: Float!, inStock: Boolean!): Product!
  }
`;

module.exports = typeDefs;
// This schema defines a simple GraphQL API with User and Product types.