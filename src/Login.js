import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Login extends Component {
    static propTypes = {
        prop: PropTypes
    }

    constructor(props){
        super(props)

        this.state = {
            username : ''
        }
    }

     handleUsernameChange = (event)=>{

        //value changed is captured using event.target.value
        this.setState({
            username:event.target.value
        })

    }
        render() {
        return (

            <form>
                <div>
                    <label>Username</label> 
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange}></input>
                </div>

            </form>
            
        )
    }
}
