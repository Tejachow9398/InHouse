import {Component} from 'react'
import Cookies from 'js-cookie'
import {Navigate ,Link} from 'react-router-dom'
import axios from "axios"

import { withNavigation } from './withNavigation'; // adjust path if needed

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    this.props.navigate('/', { replace: true });
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username,password} = this.state
    if (username===""){
        this.onSubmitFailure("Username should not empty")
    }
    else if (password===""){
        this.onSubmitFailure("Password should not empty")
    }
    else {
        const values = {
            username,
            password
        }
        axios.post("http://localhost:8081/login",values)
        .then(res=>{
            if(res.data!=="Failed"){
                this.onSubmitSuccess(res.data)
            }
            else {
                this.onSubmitFailure("No record Found")
            }
            
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

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
        Email or Username
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          placeholder='Email or Username'
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
            <h1>Log In To Your Hurak Account! </h1>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
        <Link to="/signup">
        <p>Sing Up</p>
        </Link>
      </div>
    )
  }
}

export default withNavigation(LoginForm)