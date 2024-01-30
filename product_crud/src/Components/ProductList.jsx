// ProductList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../features/productSlice';
import ProductItem from './ProductItem';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

    useEffect(() => {
      dispatch(fetchProducts());
    }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div>
      <h2 className=' text-white  text-4xl font-bold'>Product List</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ProductList;
