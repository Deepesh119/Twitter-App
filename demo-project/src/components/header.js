import React,{useState} from 'react';
import '../App.css';

function Header() {
   const [order,setOrder] = useState('');  
   const [address,setAddress] =  useState('');  
   const [number,setNumber] =  useState('');

   const[allEntry,setAllEntry]=useState([]);
   
   const SubmitForm = (e)=>{
    e.preventDefault();      
     const newEntry = {order:order,address:address,number:number};
     setAllEntry([...allEntry,newEntry])
   } 
   
   

    return (
        <div className="main_one">
              <div className="font_style">
              <h1>Kiran Restaurant</h1>
              </div>
             <div className="flex_box"> 
               <div className="child_one"> 
               </div>
               <div>
                 <form action="" onSubmit={SubmitForm}>
                     <h5>Your Order</h5>
                     <input type="order" placehholder="Order "
                      id="order"
                      value={order}
                      onChange={(e)=>setOrder(e.target.value)}
                     />
                     
                     <h5>Your Address</h5>
                     <input type="address" placehholder="Address "
                      id="Address"
                      value={address} onChange={(e)=>setAddress(e.target.value)}
                     />
                     
                     <h5>Contact Number </h5>
                     <input type="number" placehholder="Contact Number"
                     id="number"
                     value={number}
                     onChange={(e)=>setNumber(e.target.value)}
                     />
                     
                     <div>
                     <button id="final"> SUBMIT </button>
                     </div>
                     <div className="menu">
                         <div>  
                             <h5>BreakFast </h5>
                             <p>Sandwich</p>
                             <p> Paratha </p>
                             <p> Pasta</p>
                             <p> Veg-roll </p>
                             <p> Omelet </p>
                         </div>
                         <div id="margin">    
                            <h5> Lunch</h5>
                             <p>Rice-Cury</p>
                             <p>Rice-Rajma</p>
                             <p>Rice-Chicken </p>
                             <p>Chapati</p>
                             <p>Mix-Veg</p>
                         </div>
                         <div id="margin_one">
                           <h5>Snacks </h5>
                             <p>Pakora</p>
                             <p> Chowmein </p>
                             <p> Samosa </p>
                             <p>Momos</p>
                             <p> Veg-Maggi </p>
                             
                         </div>
                         <div id="margin_two">
                           <h5>Dinner </h5>
                             <p>Rice-Cury</p>
                             <p>Rice-Rajma</p>
                             <p>Rice-Chicken </p>
                             <p>Chapati</p>
                             <p>Mix-Veg</p>
                         </div>
                     </div>   
                </form>   
               </div>  
             </div>
            <div>
                <div className="heading_special">
                  <h2> Todays Special Offer </h2>
                </div>
                <div className="speciality">
                  <h5> Today we are providing
                  chole bhature,Cold Drink,Along with Rasgulla  </h5>
                  
                  <h4> @199 Only</h4>
                </div>   
            </div>    
        </div>       
    )
}

export default Header;
