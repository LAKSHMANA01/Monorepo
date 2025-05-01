// # Create UserList component
// cat > src/components/UserList.js << EOF
import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { Button } from '@cloud-monorepo/ui';

const GET_USERS = gql`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
`;

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  const navigate = useNavigate();

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">User Directory</h2>
      <ul className="space-y-3">
        {data.users.map(user => (
          <li key={user.id} className="border rounded-lg p-3 flex justify-between items-center">
            <div>
              <h3 className="font-medium">{user.name}</h3>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <Button onClick={() => navigate(`/remote1/user/\${user.id}`)}>
              View Details
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;