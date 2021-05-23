import React from 'react';
import AuthService from '../services/authService'

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = { username:'',password:'', errors: {}};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
      }
      
      // Form submitting logic, prevent default page refresh 
      handleSubmit(event){
        // const { username, password, errors} = this.state
        event.preventDefault();
        if(!this.handleValidation()){
            console.log('Form has error')
        }else{
          AuthService.login(this.state).then( res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            window.open('http://localhost:3000/store', '_self')
            // this.props.history.push('/list');
        })
        }

      }

      handleValidation(){
        let fields = this.state;
        let errors = {};
        let formIsValid = true;

        if(!fields["username"]){
          formIsValid = false;
          errors["username"] = "Cannot be empty";
        } 

        if(!fields["password"]){
          formIsValid = false;
          errors["password"] = "Cannot be empty";
        // } else {
        //     if (fields["password"].length < 5) {
        //       formIsValid = false;
        //       errors["password"] = "Password length should  be greater than 5 characters";
        //     }
        }
        console.log(fields["username"] , fields["password"], formIsValid)
        this.setState({errors: errors});
        return formIsValid;
      }
      
      // Method causes to store all the values of the 
      // input field in react state single method handle 
      // input changes of all the input field using ES6 
      // javascript feature computed property names
      handleChange(event){
        this.setState({
          // Computed property names
          // keys of the objects are computed dynamically
          [event.target.name] : event.target.value
        })
      }
      
      // Return a controlled form i.e. values of the 
      // input field not stored in DOM values are exist 
      // in react component itself as state
      render(){
        return(
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor='username'>Username</label>
              <input 
                name='username'
                placeholder='Username' 
                value = {this.state.username}
                onChange={this.handleChange}
              />
              <span style={{color: "red"}}>{this.state.errors["username"]}</span>
            </div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type ='password'
                name='password' 
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange}
              />
              <span style={{color: "red"}}>{this.state.errors["password"]}</span>
            </div>
            
            <div>
              <button type='submit'>Login</button>
            </div>
          </form>
        )
      }
    }

    export default LoginForm;