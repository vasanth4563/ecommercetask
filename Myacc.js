import style from './File.module.css'

function Myacc(){

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
     <li><a href=''>Payment</a> </li>
     <input type="search"  placeholder='search'/>
     <li id={style.a}><a href='/F1'>Home</a> </li>
     </ul>
     </div>

     <div className={style.My1}>
     
        <h2>Create Account </h2>
        <p><b>Your Name</b></p>
        
        <div className={style.My5}>
        <input type='text' placeholder='Fisrt and Last Name'></input>
        </div>
        
        <p><b>Mobile Number</b></p>
      
       <div className={style.My3}>
        <input type='text' placeholder='Mobile Number'></input>
        </div>
        
        <p><b>Password</b></p>
        <div className={style.My6}>
        <input type='text' placeholder='At least 6 characters '></input>
        </div>
        <p>Password must be 6 characters</p>
         
        <p>By Continuing, you agree to webpage conditions of use</p>
      
       <div  className={style.My4}>
        <button type='=submit'>Press to Contine</button>
        </div>

       <hr className={style.My05}></hr>
        
         <div className={style.My8}>
        <h3> Buying for Work? </h3>
          </div>

        <a href=''>Shop On Book website</a>
    
     </div>

    </>
    )

}
export default Myacc;