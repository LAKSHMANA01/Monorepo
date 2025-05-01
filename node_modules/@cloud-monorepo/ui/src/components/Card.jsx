import React from 'react';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;