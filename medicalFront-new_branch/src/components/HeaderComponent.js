import React, { Component } from 'react'
import  { Redirect,Link } from 'react-router-dom'
import AuthService from '../services/authService'
class HeaderComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
                 
        }
    }
    logout(){
            // alert("hello");
        AuthService.logout().then( res => {
            // console.log(res);
            // alert("hello");
            localStorage.clear();
            this.forceUpdate()  
        })
        // this.props.history.push('/employees');
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className= "row">
                        {console.log("QQQQQQQQQQ",localStorage)}
                        {localStorage.getItem("token")!==null ? 
                        <div>
                            <a href="/store" className="navbar-brand">Manage Store</a>
                            <a href="/medicinelist" className="navbar-brand">Manage Medicine</a>
                       
                             <a href="/" className="navbar-brand" onClick={this.logout}>Logout</a>
                        </div>
                        : null}
                    </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
