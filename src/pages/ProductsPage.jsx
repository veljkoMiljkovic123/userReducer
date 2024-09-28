import React from 'react';
import { useSelector } from 'react-redux';

function ProductsPage() {

  const singleProduct = useSelector((state)=>state.productStore.singleProduct)

  return (
    <div>
      <h2>{singleProduct.title}</h2>
      <h2>{singleProduct.desc}</h2>
      <h2>{singleProduct.price}</h2>
    </div>
  );
}

export default ProductsPage;
