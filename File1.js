import style from './File.module.css'




function F1(){
    

    return(
        <>
    <div className={style.Mar}><marquee>
        <div  className={style.Mar1}>
        <h4> ---- Welcome To The Book World ----
            
              </h4>
               </div> </marquee> </div>

    <div className={style.one}>
        <ul>
      
     <li><a href='/Books'>New Books</a></li> <i class="fa-solid fa-person"></i>
     <li><a href='/About'>About</a> </li>
     <li><a href='/buyed'>Payment</a> </li>
     <input type="search"  placeholder='search'/>
     <li id={style.a}><a href='/Myacc'>My Account</a> </li>
     </ul>
     </div>

   

      <div className={style.four}>
     <h1>Book Breeze</h1>
     <p>We tell ourselves stories in order to live</p>
     </div>

     <div className={style.M}>
     <marquee>welcome to online bookstore</marquee>
    </div>
   
     <div className={style.th}>
        
        <div className={style.d}>

        <img src='img1.jpg'></img>
        <h4>Name: The Brothers Karamazov</h4>
        <h4>Author: Fyodor Dostoevsky</h4>
        <a href='/Press1'></a>
        
        <button><a href='/Buyed'>BuyNow</a></button> <button><a href='/Press1'> ViewProduct </a></button> 
        </div>
        
       
       <div className={style.d}>
        <img src='img2.jpg'></img>
        <h4>Name: The Name of the Rose</h4>
        <h4>Author: William Weaver</h4>
        
    <button> <a href='/Buyed'>BuyNow</a></button> <button><a href='/Press1'>ViewProduct</a></button>
       </div>
       
      

        
       <div className={style.d}>
        <img src='img4.jpg'></img>
         <h4>Name: The Iliad </h4>
        <h4>Author:  
         Emily Wilson
        </h4>
        <button><a href='/Buyed'> BuyNow </a></button> <button><a href='/Press1'>ViewProduct</a></button>
    </div>
       
       <div className={style.d}>
        <img src='img6.jpg'></img>
         <h4>Name: A Tale of Two Cities</h4>
        <h4>Author: Charles Dickens

        </h4>
       
    <button> <a href='/Buyed'>BuyNow</a></button> <button><a href='/Press1'>ViewProduct</a></button>
       
       </div>

    </div> 
     
     <div className={style.A}>
     <marquee>
     <h3>“To learn to read is to light a fire; every syllable that is spelled out is a spark.”</h3>
     </marquee>
     </div>

<div className={style.add}>
 
    <div className={style.add1}>
      <h2>Company</h2>
      <h4>About Us </h4>
      <h4>Career</h4>
      <h4>Blog</h4>
      <h4>Contact Us</h4>
      </div>

      <div className={style.add2}>

      <h2>Policies</h2>
      <h4>Privacy Policies</h4>
      <h4>Terms of Use</h4>
      <h4>Secure Shopping</h4>
      <h4>Copyright Policy</h4>
      </div>

      <div className={style.add3}>
      <h2>Help</h2>
      <h4>Payment</h4>
      <h4>Shipping</h4>
      <h4>Return,</h4>
      <h4>FAQ</h4>
      </div>

      <div className={style.add4}>
      <h2>Misc</h2>
      <h4>Affiliate</h4>     
      <h4>Sitemap</h4> 
      </div>
     
</div>
      


     </>
    )
}
export default F1;