
// cat > src/components/UserDetail.js << EOF
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Button } from '@cloud-monorepo/ui';

const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id }
  });

  if (loading) return <p>Loading user details...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data.user) return <p>User not found</p>;

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <p className="mb-2"><span className="font-semibold">Name:</span> {data.user.name}</p>
      <p className="mb-4"><span className="font-semibold">Email:</span> {data.user.email}</p>
      <Button onClick={() => navigate('/remote1')}>Back to User List</Button>
    </div>
  );
};

export default UserDetail;