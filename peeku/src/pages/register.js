import React,{useState} from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
  const[email,setEmail] = useState(" "); 
  const[password,setPassword] = useState("");
  const[address,setAddress] = useState("");
  const[address2,setAddress2] = useState("");
  const[city,setCity] = useState("");
  const[zip,setZip] = useState("");

  const [allEntry,setAllEntry] = useState([]);

  


 const SubmitForm=(e)=>{
   e.preventDefault();
    const newEntry= {email:email,password:password,adress:address,address2:address2,city:city,zip:zip}
    setAllEntry([...allEntry,newEntry])
   }
    return (
        <div>
            <form class="row g-3" onSubmit={SubmitForm}>
   <div class="col-md-6">
     <label for="inputEmail4" class="form-label">Email</label>
     <input type="email" class="form-control" id="inputEmail4"
      onChange={(e)=>setEmail(e.target.value)}
     />
   </div>
   <div className="col-md-6">
     <label for="inputPassword4" class="form-label">Password</label>
     <input type="password" class="form-control" id="inputPassword4"
      onChange={(e)=>setPassword(e.target.value)}
     />
   </div>
   <div className="col-12">
     <label for="inputAddress" class="form-label">Address</label>
     <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"
      onChange={(e)=>setAddress(e.target.value)}
     />
   </div>
   <div className="col-12">
     <label for="inputAddress2" class="form-label">Address 2</label>
     <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"
      onChange={(e)=>setAddress2(e.target.value)}
     />
   </div>
   <div className="col-md-6">
     <label for="inputCity" class="form-label">City</label>
     <input type="text" class="form-control" id="inputCity"/>
   </div>
   <div className="col-md-4">
     <label for="inputState" class="form-label">State</label>
     <select id="inputState" class="form-select">
       <option selected>Choose...</option>
       <option>...</option>
     </select>
   </div>
   <div className="col-md-2">
     <label for="inputZip" class="form-label">Zip</label>
     <input type="text" class="form-control" id="inputZip"
      onChange={(e)=>setZip(e.target.value)}
     />
   </div>
   <div className="col-12">
     <div className="form-check">
       <input className="form-check-input" type="checkbox" id="gridCheck"/>
       <label className="form-check-label" for="gridCheck">
         Check me out
       </label>
     </div>
   </div>
   <div className="col-12">
     <button type="submit" class="btn btn-primary"><Link to="/login"> Sign in </Link></button>
   </div>
 </form>
         </div>
     )
 }

export default Register;
