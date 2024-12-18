
import style from './File.module.css'

function Buyed(){
    const showAlert = () => {
        alert('Order Placed ');
     };
     
     
   
    
     return(
        <>
        <div className={style.Mar}><marquee>
        <div  className={style.Mar1}>
            <h4>Welcome To The Book World</h4>   
            </div>
              </marquee> </div>
<div className={style.one}>
        <ul>
      
     <li><a href='/F1'>Home</a></li> 
     <li><a href='/About'>About</a> </li>
     <li><a href='/Books'>NewBooks</a> </li>
     <input type="search"  placeholder='search'/>
     <li id={style.a}><a href='/Myacc'>My Account</a> </li>
     </ul>
     </div>

     <div className={style.in}>
        
    
    <div className={style.in11} >
     <h3>Payment Details:</h3>
     
     </div> 
      
     <div className={style.in1}>
     
        <input type='text' placeholder='FirstName'></input>
        </div>
        
    <div className={style.in2}>
        <input type='text' placeholder='LastName'></input>
        </div>
       
    <div className={style.in3} > 
        <input type='text' placeholder='Email Id'></input>
        </div>
        
    <div className={style.in4}>
         <input type='text' placeholder='Card Number'></input>
         </div>
       
    <div className={style.in5}>
        <input type='text' placeholder='Expiration Date'></input>
        </div>
                         
    <div className={style.in6}>
         <input type='text' placeholder='CVC'></input>
         </div>
                             
    <div className={style.in7}>
        <input type='text' placeholder='ZIP'></input>
        </div>
    
    <div className={style.in8}>
        <input type='text' placeholder='Address'></input>
        </div>
    
    <div className={style.in9}>
    <button onClick={showAlert}>PayNow</button>

<div className={style.H1}>
    <div  className={style.H2}>
    <h1>Price Details:</h1>
    <hr  className={style.H3}></hr>
    </div>
     <h4 >Price(item):</h4>

     <h4>Discount:</h4>
     <h4>Platform fee:</h4>
     <h4>Delivery Charge:</h4>
     <h2>Total Price:</h2>

     
     </div>
     
    
    <div className={style.in10}>
          <img src='B1.avif'></img>
    </div>
     

        <div className={style.N3}>
        <div className={style.N4}>
       
       <img src='Bu.png'></img>
       <h1>100% Free</h1> 
       </div>

       <div className={style.N5}>
       <img src='Bu1.png'></img>
       <h1>10+ years</h1> 
       </div>
       <div className={style.N6}>
       <img src='Bu2.png'></img>
      <h1>Support</h1> 
       </div>
       </div>
   </div>
       
     
    
    </div>

        </>
    )
};


export default Buyed;