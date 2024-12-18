import style from './File.module.css'

function About(){
    const showAlert = () => {
      alert ('subcribed');
    };

    return(
<>

<div className={style.one}>
        <ul>
        <div className={style.Mar}><marquee>
        <div  className={style.Mar1}>
        <h4> ---- Welcome To The Book World ----
            
              </h4>
               </div> </marquee> </div>
      
     <li><a href='/Books'>New Books</a></li> <i class="fa-solid fa-person"></i>
     <li><a href='/F1'>Home</a> </li>
     <li><a href='/buyed'>Payment</a> </li>
     <input type="search"  placeholder='search'/>
     <li id={style.a}><a href='/Myacc'>My Account</a> </li>
     </ul>
     </div>

     <div>
        <img src='about1.png'></img>
     </div>

     <div className={style.ab1}>
        <h1>Its a Complete Ecommerce Book Advertising </h1>
        <p>Subscribe Now And Stay Ahead Of The Game.</p>

       <div className={style.ab2}>
        <input type='text' placeholder='FullName'></input>
       </div>

       <div className={style.ab3}>
        <input type='text' placeholder='Email Adress'></input>
        </div>
       
       <div className={style.ab4} >
        <input type='text' placeholder='Company'></input>
       </div>

       <div className={style.ab5}>
        <input type='text' placeholder='Designaton'></input>    
        </div>    
   
   
       <div className={style.ab6}>
       <button onClick={showAlert}>Subscribe</button>
       </div>
     
     </div>
     
     <div className={style.ac1}>
        <img src='ab2.webp'></img>
        <h1>sales growth</h1>
        </div>

        <div className={style.ac2}>
            <img src='ab3.webp'></img>
            <h1>recurring revenue</h1>
        </div>
       
       <div className={style.ac3}>
        <img src='ab4.webp'></img>
        <h1>Flying Review </h1>
       </div>

       <div className={style.ac7}>

       <div className={style.ac4}>
        <h1>Browse</h1>
       
        <div className={style.ac44}>
        <h3>reviews</h3>
        <h3>blogs</h3>
        <h3>partners</h3>
        <h3>changelog</h3>
       </div>
         </div>
       
       <div className={style.ac5}>
       <h1>Products</h1>
       <div  className={style.ac55}>
       <h3>Factory</h3>
       <h3>Broker</h3>
       <h3>CommerceKit</h3>
       <h3>Popups</h3>
       </div>
       </div>

       <div className={style.ac6}>
        <h1>Connect</h1>
       <div className={style.ac66}>
        <h3>My Account</h3>
        <h3>Documentation</h3>
        <h3>affiliates</h3>
        <h3>Supports</h3>
       </div>
</div>
       </div>

        <div className={style.ad7}> 
        <img src='ab5.png'></img>
       </div> 


</>
    )
}
export default About; 