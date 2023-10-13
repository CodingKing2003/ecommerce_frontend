import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import {BiSearch} from "react-icons/bi"
import {PiShoppingCartSimpleBold} from "react-icons/pi"
import {CgProfile} from "react-icons/cg"
import logo from '../../../images/logo.png'


const Header = () => {

    const options = {
        burgerColor:"#eb4034",
        burgerColorHover: "#eb4034",
        logo,
        logoWidth: "20vmax",
        navColor1: "white",
        logoHoverSize: "10px",
        logoHoverColor: "#eb4034",
        link1Text: "Home",
        link2Text: "Products",
        link3Text: "Contact",
        link4Text: "About",
        link1Url: "/",
        link2Url: "/products",
        link3Url: "/contact",
        link4Url: "/about",
        link1Size: "1.3vmax",
        link1Color: "rgba(35, 35, 35,0.8)",
        nav1justifyContent: "flex-end",
        nav2justifyContent: "flex-end",
        nav3justifyContent: "flex-start",
        nav4justifyContent: "flex-start",
        link1ColorHover: "#eb4034",
        link1Margin: "1vmax",
        searchIcon:"true",
        cartIcon:"true",
        profileIcon:"true",
        SearchIconElement:BiSearch,
        CartIconElement:PiShoppingCartSimpleBold,
        ProfileIconElement:CgProfile,
        searchIconUrl:"/search",
        cartIconUrl:"/cart",
        profileIconUrl: "/login",
        profileIconColor: "rgba(35, 35, 35,0.8)",
        searchIconColor: "rgba(35, 35, 35,0.8)",
        cartIconColor: "rgba(35, 35, 35,0.8)",
        profileIconColorHover: "#eb4034",
        searchIconColorHover: "#eb4034",
        cartIconColorHover: "#eb4034",
        cartIconMargin: "1vmax",
      };
  return (
    <ReactNavbar {...options}/>
  )
}

export default Header