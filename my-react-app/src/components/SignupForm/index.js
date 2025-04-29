
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Navigate ,Link} from 'react-router-dom'
import axios from "axios"
import { withNavigation } from './withNavigation'; // adjust path if needed

import './index.css'

class SignupForm extends Component {
  state = {
    username: '',
    password: '',
    email : "",
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeEmail = event =>{
    this.setState({email: event.target.value})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/login')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username,password,email} = this.state
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (username===""){
        this.onSubmitFailure("Username should not empty")
    }
    else if (password===""){
        this.onSubmitFailure("Password should not empty")
    }
    else if ( !emailRegex.test(email)){
        this.onSubmitFailure("InCorrect Email")
    }
    else {
        const values = {
            username,
            email,
            password
        }
        axios.post("http://localhost:8081/signup",values)
        .then(res=>{
            this.props.navigate('/login', { replace: true });
        })
        .catch(err =>(console.log(err)))
    }
    
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-field"
          placeholder='Password'
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderEmailField = ()=>{
    const {email} = this.state
    return (
      <>
        <label className="input-label" htmlFor="email">
        Email 
        </label>
        <input
          type="text"
          id="email"
          className="input-field"
          placeholder='Email'
          value={email}
          onChange={this.onChangeEmail}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
         Username
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          placeholder='Username'
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Navigate  to="/" replace />
    }
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
            <h1>Sign Up and Start Learning</h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
          
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
        <Link to="/login">
        <p>Already Have an Account ?</p>
        </Link>
      </div>
    )
  }
}

export default withNavigation(SignupForm)
