import React from "react";

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: " The Brothers", price: 1500, },
    { id: 2, name: " The Name Rose", price: 3000 },
    { id: 3, name: " The Iliad", price: 1000 },
    { id: 4, name: " A Tale of Two Cities", price: 2000 },
  ];

  return (
    <div>
      <h2>Product Details</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
