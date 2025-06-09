import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";
import { Link } from 'react-router-dom'

import "./index.css"

const LoginSignup = ()=>{
  const navigate = useNavigate();
    const onClickLogout = () => {
        Cookies.remove('jwt_token')
        navigate('/');
    }

    const renderCartItemsCount = () => (
        <CartContext.Consumer>
          {value => {
            const {cartList} = value
            const cartItemsCount = cartList.length
    
            return (
              <>
                {cartItemsCount > 0 ? (
                  <span className="cart-count-badge">{cartList.length}</span>
                ) : null}
              </>
            )
          }}
        </CartContext.Consumer>
      )
      
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
            <div className="nav-menu-item-mobile">
            <Link to="/cart" className="nav-link">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-img"
              />
              {renderCartItemsCount()}
            </Link>
          </div>
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