import { useState, useEffect} from "react";
import style from './File.module.css'

function Press1(){

   const [reviews, setReviews] = useState([
    { id: 1, name: "sam", rating: 5, comment: "Amazing to read" },
      { id: 2, name: "ram", rating: 4, comment: "good to read" },
   ]) 
   
   const [newReview, setNewReview] = useState({
    name:"",
    rating:"",
    comment:"",
   });
  
   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  
  
   const handlesubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews(
        [
          ...reviews,
          { ...newReview, id: reviews.length + 1, rating: parseInt(newReview.rating) },

        ]);
        setNewReview({  name: "", rating: "", comment: "" });
    } else {
      alert("Please fill in all fields.");
    }
   };
    
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    const [coun, setCoun] = useState(0);
    const [cal, setCal] = useState(0);
    
    const [A, aB] = useState(0);
    const [c, abC] = useState(0);

    const [Im, imG] = useState(0);
    const [M, imaGe] = useState(0);

   // add to card-----

    useEffect(() => {
        setCalculation(() => count * 1500);
      }, [count]); 

      
    useEffect(() => {
        setCal(() => coun * 3000);
      }, [coun]);

    useEffect(() => {
        abC(() => A* 1000);
      }, [A]);

      useEffect(() =>{
        imaGe(() => Im*2000);
      },[Im]);

      
     

    return(
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
     
      <div className={style.P} >
      
     <div className={style.Press}> 
     <img src='img1.jpg'></img>
     
     <div className={style.Press1} >
        <h1>The Brothers</h1>
        <h2>Fyodor Dostoevsky</h2>
        <div className={style.Press0040}>  <h3>Special Price</h3></div>
        
        
        <div className={style.Press01}>
        <h2>$1500</h2> 
       </div>
        
        <div className={style.Press3}>  <s>$3000</s></div>
          
          <div className={style.Press030}>

          <button onClick={() => setCount((c) => c + 1)}>AddToCart</button>   
          <h3>quantity:{count}</h3>
          <h3>total:{calculation}</h3>

          
          </div>
         
        </div>
        
        <div className={style.Press21}>
         <img src='img2.jpg'></img>
         <h1>The Name Rose</h1>
         <h2>Umberto Eco
         </h2>
         <div className={style.Press00004}>  <h3>Special Price</h3></div>
        
        
        <div className={style.Press2}>
        <h2>$3000</h2> 
       </div>
        
        <div className={style.Press3}>  <s>$5000</s></div>
          
          <div className={style.Press04}>

          <button onClick={() => setCoun((c) => c + 1)}>AddToCart</button>   
          <h3>quantity:{coun}</h3>
          <h3>total:{cal}</h3>
          </div>

       </div>
             
     </div>

     <div className={style.Press22}> 
        <img src='img4.jpg'></img>
        <h1>The Iliad</h1>
         <h2>Emily Wilson</h2>

         <div className={style.Press0004}>  <h3>Special Price</h3></div>
        
        
        <div className={style.Press02}>
        <h2>$1000</h2> 
       </div>
        
        <div className={style.Press002}>  <s>$3000</s></div>
          
          <div className={style.Press5}>

          <button onClick={() => aB((c) => c + 1)}>AddToCart</button>   
          <h3>quantity:{A}</h3>
          <h3>total:{c}</h3>
          </div>

     </div>

     <div  className={style.Press23}>
        <img src='img6.jpg'></img>
        <h1> A Tale of Two Cities</h1>
        <h2>Charles Dickens</h2>
     </div>
     
     <div className={style.press231}>
     <div className={style.Press004}>  <h3>Special Price</h3></div>
        
     <div className={style.Press03}>
        <h2>$2000</h2> 
       </div>
        
        <div className={style.Press003}>  <s>$43000</s></div>
          
          <div className={style.Press6}>

          <button onClick={() => imG((c) => c + 1)}>AddToCart</button>   
          <h3>quantity:{Im}</h3>
          <h3>total:{M}</h3>
          </div>
     </div>
        </div>
    
     
    
    <div className={style.press10}>
     <a href='/Appone'>view cart</a>
  </div>

<div class={style.comment}>
  <div className={style.comment2}>
        <div className={style.comment6}>
        <h1>Reviews</h1>
  
        {/* Reviews List */}
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.name}</strong> ({review.rating} stars): {review.comment}
            </li>
          ))}
        </ul>
        </div>
  
        {/* Add Review Form */}
        <h2>Drop your Review</h2>
        <form onSubmit={handlesubmit}>
          <div>
            <label>
              Name:
              <div className={style.comment5}>
              <input
                type="text"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
              />
              </div>
            </label>
          </div>
          <div className={style.comment4}>
            <label>
              Rating:
              <select
                name="rating"
                value={newReview.rating}
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </label>
          </div>
          <div className={style.comment1}>
            <label>
              Comment:
              <textarea
                name="comment"
                value={newReview.comment}
                onChange={handleInputChange}
              ></textarea>
            </label>
          </div>
         
         <div className={style.comment3}>
          <button type="submit">Submit Review</button>
       </div>
        </form>
      </div>

      </div>

      <div>
        <a href='/ShippingInfo'>Shipping Cart</a>
      </div>

        </>
    )
};
export default Press1;
