import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import style from "./File.module.css"

const Appone = () => {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <>
    <div className={style.one}>
    <ul>
     <li><a href='/F1'>Home</a></li> <i class="fa-solid fa-person"></i>
 <li><a href='/About'>About</a> </li>
 <li><a href='/Buyed'> Payment</a> </li>
 <input type="search"  placeholder='search'/>
 <li id={style.a}><a href='/Myacc'>My Account</a> </li>  

 </ul>
 </div>

    <div className={style.Main}>
      <h1>view Cart</h1>
      <ProductList addToCart={addToCart} />
      <Cart cart={cart} />
      <button><a href='/buyed'>Buy Now </a></button>
    </div>
      

         <div className={style.main1}>
          <img src='main3.avif'></img>
         </div>
        

        <div className={style.main01}>
         <div className={style.main2}>
         <h3>Get your refund policy plus a free trial of Book Breeze</h3>
        </div>

         
     <div className={style.mn1}>
     
     <input type='text' placeholder='FirstName'></input>
     </div>
     
 <div className={style.mn2}>
     <input type='text' placeholder='LastName'></input>
     </div>
    
 <div className={style.mn3} > 
     <input type='text' placeholder='Product Id'></input>
     </div>
     
 <div className={style.mn4}>
      <input type='text' placeholder='Email Id'></input>
      </div>
  
<div className={style.mn5}>
  <button>Submit Here</button>
  </div>

  </div>
    
    </>
  );
};

export default Appone;