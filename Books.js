import style from './File.module.css'

function Books(){

    return(
        <>
        <div className={style.Mar}><marquee>
        <div  className={style.Mar1}>
           <h4>Welcome To The Book World </h4> </div>     </marquee> </div>
        <div className={style.one}>
        <ul>
         <li><a href='/F1'>Home</a></li> <i class="fa-solid fa-person"></i>
     <li><a href='/About'>About</a> </li>
     <li><a href='/Buyed'> Payment</a> </li>
     <input type="search"  placeholder='search'/>
     <li id={style.a}><a href='/Myacc'>My Account</a> </li>  
     </ul>
     </div>
        
        <div className={style.B}>
        <form>
            <div className={style.C}>
            <p>Enter the BookName: </p>
            </div>
  
            <div className={style.E}>
            <input type="text"></input>
            </div>
            
            
            <div className={style.C} >
            <p>Enter AuthorName:</p>
            </div>
            
            <div className={style.E}>
            <input type="text"></input>
            </div>

            <div className={style.C} >
            <p> Publishment Year: </p>
            </div>
            
            <div className={style.E}>
            <input type="text"></input>
            </div>

            <div className={style.C} >
            <p>Translator Name: </p>
            </div>
            
            <div className={style.E}>
            <input type="text"></input>
            </div>
           
           <div className={style.G}>
            <button>Submit</button> <button>Reset</button>
           </div>

           <div className={style.L}>
            <div className={style.L1}>
            <img src='p1.svg'></img>
            <h1>Create</h1>
            </div>

            <div className={style.L1}>
            <img src='p2.svg'></img>
            <h1>List</h1>
            </div>

            <div  className={style.L2}>
            <img src='p3.svg'></img>
            <h1>Order</h1>
            </div>

            <div className={style.L2}>
            <img src='p4.svg'></img>
            <h1>Shipment</h1>
            </div>

           </div>
         <div className={style.F2}>
           <div className={style.F}> 
            <div className={style.F1}>
         <h1>Popular categories to sell across world</h1>
         </div>
         <div className={style.H}>  
                
                <p>List Products</p>
                <p>storage & shipping</p>
                <p>Receive Payment</p>
                <p>Help & Support</p>
             </div>


            <div className={style.I}>
            <p> Sell Engage Online</p>
            <p> Sell Expand Online</p>
             <p>Sell Attract Online</p>
            <p >Sell Operate Online</p>
            </div>

            <div className={style.J}>
            <p> Sell comics Online</p>
            <p> Sell historic Online</p>
            <p>Sell divine Online</p>
            <p >Sell scientific Online</p>
            </div>

            <div className={style.K}>
            <p> Sell Convert Online</p>
            <p> Sell B2B Editions Online</p>
            <p>Sell Headlines Online</p>
            <p >Sell Internationalpapers Online</p>
            </div>

            

            <div className={style.M}>
                
                <div className={style.M1}>
            <a href=''>Blog</a>
            </div>

            <div className={style.M2}>
            <a  href=''>Platfrom</a>
            </div>

            <div className={style.M3}>
            <a  href=''>Service</a>
            </div>

            <div className={style.M4}>
            <a  href='' >Resource</a>
            </div>

            </div>

            
           </div>
           </div>
       
        </form>

    </div>

       
    </>
    )
};
export default Books; 
 