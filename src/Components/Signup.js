import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import Navbar1 from './Navbar1'

const SignUp = (props) => {

    const [credentials, setCredentials] = useState({name:"", email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name:credentials.name ,email: credentials.email, password: credentials.password})
        });

        const json = await response.json()
        console.log(json);
      
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history.push("/Login");

       
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }


    return (

        <>
        <Navbar1/>
       <div style={{paddingTop:"50px",paddingBottom:"200px"}}>
        <h1 style={{alignContent:"center",marginLeft:"900px"}}>Sign Up</h1>
        <br/>
        <br/>
        
        <div style={{display:"block",padding:"10px 10px 10px 10px",width:"50%",marginLeft:"500px",border:"2px solid black"}}>
            <form onSubmit={handleSubmit}>

                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" class="form-control"  name="name" id="name" onChange={onChange} value={credentials.name}/>

                </div>

                <div class="">
                    <label for="exampleInputEmail1" class="">Email address</label>
                    <input type="email" class="form-control"  name="email" id="email"  onChange={onChange} value={credentials.email} required/>

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" name="password"  onChange={onChange} value={credentials.password} required minLength={5}/>
                </div>
              
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            {/* <lottie-player style={{ width: "80%", height: "100%" }} id="firstLottie" autoplay="true" loop="" mode="normal" background="transparent" speed="1" src="https://assets6.lottiefiles.com/private_files/lf30_p5tali1o.json"></lottie-player> */}
        </div>
            <br/>
            </div>
        </>
    )
}

export default SignUp
