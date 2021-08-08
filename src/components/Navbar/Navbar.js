import React,{useState} from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavnarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./Navbar.elements";

const Navbar = () => {
  const [click, setClick] = useState(false)
  // const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  // const showButton = () => {
  //   if(window.innerWidth <= 960) {
  //     setButton(false)
  //   } else {
  //     setButton(true)
  //   }
  // }
  const closeMobileMenu = () => setClick(false)

  // useEffect(()=>{
  //   setButton();
  // },[])

  // window.addEventListener("resize", showButton)
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavnarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              履歷表
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click} >
              <NavItem>
                <NavLinks href="#">首頁</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="#projects">作品</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="#experience">學經歷</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks href="#contact">聯絡我</NavLinks>
              </NavItem>
            </NavMenu>
          </NavnarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar
