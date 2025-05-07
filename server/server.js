import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const Users = [
  { id: 1, name: "John Doe", age: 30, isMarried: false },
  { id: 2, name: "Jane Smith", age: 22, isMarried: true },
  { id: 3, name: "Lakshman", age: 24, isMarried: false },
  { id: 4, name: "Sita", age: 35, isMarried: true },
  { id: 5, name: "Ramesh", age: 85, isMarried: false },
];

const typeDefs = `
  type Query {
    getUsers: [User]
    getUser(id: ID!): User!
  }

  type Mutation {
    createUser(name: String!, age: Int!, isMarried: Boolean!): User!
  }

  type Subscription {
    _: Boolean
  }

  type User {
    id: ID!
    name: String!
    age: Int!
    isMarried: Boolean!
  }
`;

const resolvers = {
  Query: {
    getUsers: () => Users,
    getUser: (parent, args) => {
      const { id } = args;
      return Users.find((user) => user.id === parseInt(id));
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const { name, age, isMarried } = args;
      const newUser = {
        id: Users.length + 1,
        name,
        age,
        isMarried,
      };
      console.log("newUser", newUser);
      Users.push(newUser);
      return newUser;
    },
    updateUser: (parent, args) => {
      const { id, name, age, isMarried } = args;
      const userIndex = Users.findIndex((user) => user.id === parseInt(id));
      if (userIndex === -1) {
        throw new Error("User not found");
      }
      const updatedUser = {
        ...Users[userIndex],
        name,
        age,
        isMarried,
      };
      Users[userIndex] = updatedUser;
      return updatedUser;
    },
    deleteUser: (parent, args) => {
      const { id } = args;
      const userIndex = Users.findIndex((user) => user.id === parseInt(id));
      if (userIndex === -1) {
        throw new Error("User not found");
      }
      const deletedUser = Users.splice(userIndex, 1);
      return deletedUser[0];
    },

  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
