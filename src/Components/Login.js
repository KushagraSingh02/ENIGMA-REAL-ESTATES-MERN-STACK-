import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import App from '../App'
import Navbar1 from './Navbar1'
const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history.push('/Home');
            history.go('/Login');
            // <App/>
            // <Link to="/Home" ></Link>

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <>
        <Navbar1/>
             <h1 style={{ textAlign: "center", marginTop: "50px", fontWeight: "bold" }}> LOGIN </h1>
             <div style={{ padding: "100px", marginTop: "60px", marginLeft: "200px", backgroundColor: "grey", width: "75%" }}>

                 <lottie-player style={{ width: "40%", height: "70%", float: "left" }} id="firstLottie" autoplay="true" loop="" mode="normal" background="transparent" speed="1" src="https://assets6.lottiefiles.com/private_files/lf30_p5tali1o.json"></lottie-player>
                 <form onSubmit={handleSubmit} >

                     <div style={{ padding: "5px 5px 5px 5px" }}>

                         <label htmlFor="email" style={{ fontWeight: "bold", fontSize:"25px",paddingRight: "5px" }}>Email Address</label>
                         <input type="email" id="email" name="email" value={credentials.email} onChange={onChange}/>
                     </div>

                     <div style={{ padding: "5px 5px 5px 5px" }}>
                         <label htmlFor="password" style={{ fontWeight: "bold",fontSize:"25px",paddingLeft:"20px", paddingRight: "40px" }}>Password</label>
                         <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} />
                     </div>
                     
                     <button type="submit" style={{fontSize:"20px", borderRadius: "4px" }}>Submit</button>
                 </form>

             </div>
             <br /><br /><br /><br /><br />
             {/* <h4 style={{ marginLeft: "420px" }}>Haven't made an account yet ? Click below to SignUp</h4> */}

         </>
    )
}

export default Login