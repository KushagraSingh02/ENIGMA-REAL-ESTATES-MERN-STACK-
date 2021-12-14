import React from 'react'
import { useHistory } from 'react-router-dom'
import {Button} from 'react-bootstrap';
import './Logout.css'

export default function Logout() {
    
    const history = useHistory();
    return (
        <div className="Logout_welcome-text">
            <>
            <div>
             <img className="logout_animation" src="https://i.imgur.com/Q5IhUpF.gif"></img>
        </div>
                <h3 className="Logout_welcome-text_h3">Do you want to Logout?</h3>
                <div className="logoutButton1" >   
            
        
            <Button  type="submit" style={{ borderRadius: "4px" }} onClick={()=>history.push("/Login")} >Yes</Button>
            </div>
            <div className="logoutButton2">
            <Button  type="submit" style={{ borderRadius: "4px" }} onClick={()=>history.push("/Home")}>No</Button>
            </div>

            
            </>
        </div>
    )
}
