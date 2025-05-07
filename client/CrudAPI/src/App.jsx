import { useState } from "react";
import React from "react";
import "./App.css";
import { useQuery, useMutation, gql } from "@apollo/client";
// this one here property gql here
const Get_Users = gql`
  query {
    getUsers {
      id
      name
      age
      isMarried
    }
  }
`;
const Get_UserBY_ID = gql`
  query getUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      age
      isMarried
    }
  }
`;
// here we create a user
const Create_User = gql`
  mutation createUser($name: String!, $age: Int!, $isMarried: Boolean!) {
    createUser(name: $name, age: $age, isMarried: $isMarried) {
    
      name
      age
      isMarried
    }
  }
`;


function App() {
  const { loading, error, data } = useQuery(Get_Users);
  

  // here get the data by id and display it
  const {
    loading: loadingUser,
    error: errorUSer,
    data: dataUSer,
  } = useQuery(Get_UserBY_ID, {
    variables: {
      id: 3,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (loadingUser) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;
  if (errorUSer) return <p>Error: {errorUSer.message}</p>;


  const [createUser] = useMutation(Create_User);
  
  const [user, setUser] = useState({
    name: "",
    age: "",
    isMarried: false,
  });


  const handle = (e) => {
    e.preventDefault();
    createUser({
      variables: {
        name: user.name,
        age: parseInt(user.age),
        isMarried: user.isMarried,
      },
      refetchQueries: [{ query: Get_Users }],
    });
    setUser({ name: "", age: "", isMarried: false }); // optional reset
  };
  const handledelete = (id) => {
    const deleteUser = gql`
      mutation {
        deleteUser(id: ${id}) {
          id
        }
      }
    `;
    createUser({
      variables: {
        id: id,
      },
      refetchQueries: [{ query: Get_Users }],
    });
  }
  
  
  // Component return starts here — outside of handle function
  return (
    <>
      <h1> CRUD operation for Graphql</h1>
  
      <h3> Create User</h3>
      <form>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => {
            setUser({ ...user, name: e.target.value });
          }}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => {
            setUser({ ...user, age: e.target.value });
          }}
        />
        <input
          type="checkbox"
          onChange={(e) => {
            setUser({ ...user, isMarried: e.target.checked });
          }}
        />
        Married
        <button type="submit" onClick={handle}>Create</button>
      </form>
      <h2>Users</h2>
      <div>
        {loadingUser ? (
          <p>Loading...</p>
        ) : (
          <>
            <h3>{dataUSer.getUser.name}</h3>
          </>
        )}
      </div>
  
      <div>
        {data.getUsers.map((user) => {
          return (
            <div key={user.id}>
              <h2> Name :{user.name}</h2>
              <p>Age: {user.age}</p>
              <p>Married: {user.isMarried ? "Yes" : "No"}</p>
              <button onClick={e=>{ handledelete(user.id)}}>delete</button>
            </div>

          );
        })}
      </div>
    </>
  );
}  
export default App;
