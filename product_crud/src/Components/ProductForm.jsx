// ProductForm.js
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct, updateProduct } from '../features/productSlice';

const ProductForm = ({ product, onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', price: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        price: product.price.toString(),
      });
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: formData.name,
      price: parseFloat(formData.price),
    };

    if (product) {
      dispatch(updateProduct(newProduct));
    } else {
      dispatch(createProduct(newProduct));
    }

    onSubmit();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
   
   <form className='flex flex-col gap-5'  onSubmit={handleSubmit}>
    <h2 className=' text-white  text-4xl font-bold '>Add/Update Products</h2>
<div className='flex gap-10 my-10' >
<div className='flex gap-2 '>
      <label className='text-xl text-white '>Name:</label>
      <input type="text" className='border-2  border-gray-400 text-black  rounded-lg' name="name" value={formData.name} onChange={handleChange} required />

      </div>

<div className='flex gap-2'>
<label className='text-xl text-white '>Price:</label>
      <input type="number" className='border-2  border-gray-400 text-black   rounded-lg' name="price" value={formData.price} onChange={handleChange} required />

</div>
      <button className=' bg-gray-300 text-slate-950 font-bold border-2 rounded-lg' type="submit">{product ? 'Update' : 'Add'} Product</button>

</div>
    </form>
  );
};

export default ProductForm;
