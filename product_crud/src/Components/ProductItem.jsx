// ProductItem.js
import React from 'react';

const ProductItem = ({ product, onDelete }) => {
  const handleDelete = () => {
    onDelete(product.id);
  };    

  return (
    <div className=' flex gap-10 my-10 justify-center'>
      <h1 className='text-xl font-semi text-white'>Name: {product.name}</h1>
      <h1 className='text-xl font-semi text-white'>Price: ${product.price}</h1>
      <button className='bg-gray-300 text-lg text-red-300 font-bold border-2 rounded-lg' onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ProductItem;
