import React,{useState}from 'react';

const Login = () => {
   const[email,setEmail]=useState(""); 
   const[password,setPassword]=useState(""); 

   const[allEntry,setAllEntry]= useState([]);
   const SubmitForm=(e)=>{
    e.preventDefault();
     const newEntry= {email:email,password:password}
     setAllEntry([...allEntry,newEntry])
    }
    return (
        <div>
           <form action={SubmitForm}>
               <div>
                <label>Email</label>
               </div> 
               <div>
                <input type="text" placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                />
                </div> 
                <div>
                <label>Password</label>
                </div>
                <div>
                <input type="text" placeholder="Password"
                 onChange={(e)=>setPassword(e.target.value)}
                />
                </div>
                <div>
                <button> SUBMIT </button>
                </div>
            </form> 
        </div>
    )
}

export default Login;

