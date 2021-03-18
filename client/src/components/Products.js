import React from "react";

import ProductItem from '../components/ProductItem'




const Products = ({ products}) => {
  return (
    <div style={{ width:"100%", display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignContent:"space-between"}} >
   
      {products.map(product=> (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
