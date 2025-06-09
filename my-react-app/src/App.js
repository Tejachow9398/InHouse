import {Component} from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CartContext from './context/CartContext'

import Cart from "./components/Cart"
import DoorSupervisorCourse from "./components/DoorSupervisorCourse"
import TopUpDoorSupervisors from "./components/TopUpDoorSupervisors"
import TopUpSecurityGuards from "./components/TopUpSecurityGuards"
import EmergencyFirstAid from "./components/EmergencyFirstAid"
import FirstAidatWork from "./components/FirstAidatWork"
import CSCSGreenCardCourse from "./components/CSCSGreenCardCourse"
import TrafficMarshal from "./components/TrafficMarshal"
import SIACCTVOperator from "./components/SIACCTVOperator"
import SSSTS from "./components/SSSTS"
import SMSTS  from "./components/SMSTS"
import PersonalLicence from "./components/PersonalLicence"
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import './App.css';

class App extends Component {
  state = {
    cartList: [],
  }

 
  addCartItem = product => {
    const {cartList} = this.state
    let addProduct = true
    const filteredcart = cartList.map(each => {
      if (each.id === product.id) {
        addProduct = false
        return {
          quantity: each.quantity + product.quantity,
          id: each.id,
          title: each.title,
          brand: each.description,
          price: each.coursemoney,
          imageUrl: each.imgurl,
        }
      }
      return each
    })
    if (addProduct) {
      const updateproduct = {
        quantity: product.quantity,
        id: product.id,
        title: product.title,
        brand: product.description,
        price: product.coursemoney,
        imageUrl: product.imgurl,
      }
      this.setState(prevState => ({cartList: [...prevState.cartList, updateproduct]}))
    } else {
      this.setState({cartList: filteredcart})
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const filteredcartList = cartList.filter(each => each.id !== id)
    this.setState({cartList: filteredcartList})
  }

  incrementCartItemQuantity = id => {
    const {cartList} = this.state
    const filteredcartList = cartList.map(each => {
      if (each.id === id) {
        return {
          quantity: each.quantity + 1,
          id: each.id,
          title: each.title,
          brand: each.brand,
          price: each.price,
          imageUrl: each.imageUrl,
        }
      }
      return each
    })
    this.setState({cartList: filteredcartList})
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const deletecard = cartList.filter(each => {
      if (each.id === id && each.quantity === 1) {
        return false
      }
      return true
    })
    const filteredcartList = deletecard.map(each => {
      if (each.id === id && each.quantity !== 1) {
        return {
          quantity: each.quantity - 1,
          id: each.id,
          title: each.title,
          brand: each.brand,
          price: each.price,
          imageUrl: each.imageUrl,
        }
      }
      return each
    })
    this.setState({cartList: filteredcartList})
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  render(){
    const {cartList} = this.state
    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoorSupervisorCourse />} />
        <Route path="/topUpDoorSupervisors" element={<TopUpDoorSupervisors />} />
        <Route path="/topUpSecurityGuards" element={<TopUpSecurityGuards />} />
        <Route path="/emergencyFirstAid" element={<EmergencyFirstAid />} />
        <Route path="/firstAidatWork" element={<FirstAidatWork />} />
        <Route path="/CSCSGreenCardCourse" element={<CSCSGreenCardCourse />} />
        <Route path="/trafficMarshal" element={<TrafficMarshal />} />
        <Route path="/SIACCTVOperator" element={<SIACCTVOperator />} />
        <Route path="/SMSTS" element={<SMSTS  />} />
        <Route path="/SSSTS" element={<SSSTS />} />
        <Route path="/PersonalLicence" element={<PersonalLicence />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
  </BrowserRouter>
   </CartContext.Provider>
  )
}
}

export default App;
