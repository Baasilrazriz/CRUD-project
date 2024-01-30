// Dashboard.js
import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import ProductForm from './Components/ProductForm';

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEdit = (product) => {
    setSelectedProduct(product);
  };

  const handleFormClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className=' flex flex-col h-screen bg-slate-950 '>
      <h1 className='text-[4rem] font-bold text-center mb-14 text-white'>Products Dashboard</h1>
     <div className='flex flex-col  border-4 border-gray-500 mx-80 py-10 px-24'>
    <div className=''> <ProductForm product={selectedProduct} onSubmit={handleFormClose} /></div>
    <div className=''>  <ProductList onEdit={handleEdit} /></div>
     </div>
      
    </div>
  );
};

export default App;
