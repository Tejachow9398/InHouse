import Cookies from 'js-cookie'

import { BiSearch } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom'

import "./index.css"

const LoginSignup = ()=>{
    const onClickLogout = () => {
        Cookies.remove('jwt_token')
    }
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    return(
        <div className="cont">
            <img src="https://res.cloudinary.com/dov0rmq5b/image/upload/v1740317606/Screenshot_2025-02-23_190217_csryeq.png" 
            alt= "logo"/>
            <div className="search-cont">
                <BiSearch className="searchicon"/>
                <input type="search" placeholder="search" className="input"/>
            </div>
            <BsCart3/>
            {
                jwtToken !== undefined ? (
                <div> 
                    <button className="loginbtn" onClick={onClickLogout}>Log Out</button>
                </div>) : 
                (<div>
                    <Link to="signup">
                    <button className="signupbtn">Singn Up</button>
                    </Link>
                    <Link to="/login">
                    <button className="loginbtn">Log In</button>
                    </Link>
                </div>)
            }
        </div>
    )
}

export default LoginSignup