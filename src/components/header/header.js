import React, { Component } from 'react'
import './header.css'
// import { FaBeer } from 'react-icons/fa';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { FiUser } from "react-icons/fi";
import { MdAddShoppingCart } from "react-icons/md";

import { render } from "react-dom";
import CheeseburgerMenu from "cheeseburger-menu";
import HamburgerMenu from "react-hamburger-menu";
import MenuContent from "./menuContent";

class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        menuOpen: false
      };
    }
  
    openMenu() {
      this.setState({ menuOpen: true });
    }
  
    closeMenu() {
      this.setState({ menuOpen: false });
    }
  
    render() {
      return (
        <div>
          <CheeseburgerMenu
            isOpen={this.state.menuOpen}
            closeCallback={this.closeMenu.bind(this)}
          >
            <MenuContent closeCallback={this.closeMenu.bind(this)} />
          </CheeseburgerMenu>
  
          <HamburgerMenu
            isOpen={this.state.menuOpen}
            menuClicked={this.openMenu.bind(this)}
            width={32}
            height={24}
            strokeWidth={3}
            rotate={0}
            color="black"
            borderRadius={0}
            animationDuration={0.5}
          />
  
          {/* <div >
          <h1>Cheeseburger Menu demo</h1>
          <p>Click the hamburger icon to open menu</p>
        </div> */}
        </div>
      );
    }
  }

  render(<App />, document.getElementById("root"));



export class Header extends Component {
    render() {
        return (
            <div>
            <header >
                {/* <FaBeer color='purple' size='10rem' type="button" /> */}
                <div className="navbar_mobile">
                    <div className="centre">
                        SEPHORA
                    </div>
                    <div className="iconUser">
                        <FiUser size='36px'/>
                    </div>
                    <div className='iconShopping'>
                        <MdAddShoppingCart size='36px'/>
                    </div>
                    
                    {/* <li><link to="/">Connexion</link></li>  */}
                </div>
        </header>
            </div>
        )
    }
}

export default Header


//=====================================================================================

// import React from 'react';
// import {Link} from 'react-router'
// import {Navbar, NavItem} from 'react-materialize';

// export default React.createClass({
//   render(){
//     return (
//     <div>
//       <Navbar brand='logo' right>
//         <NavItem><Link to="/Home" activeClassName="active">Home</Link></NavItem>
//         <NavItem><Link to="/Sign-In" activeClassName="active">Sign In</Link></NavItem>
//         <NavItem><Link to="/Register" activeClassName="active">Register</Link></NavItem>
//       </Navbar>
//       {this.props.children}
//     </div>
//     )
//   }
// })


//=======================================================================================

// import React, { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
// import { motion } from 'framer-motion'
// import styled from 'styled-components'

// const Header = () => {
//   const [menu, setMenu] = useState('hidden')

//   return (
//     <section>
//       <Menu animate={menu} variants={menuVariants}>
//         <ContentMenuStyled>
//           <br />
//           <LinkStyled>
//             {/* <Link to={`#`}>Pokemon list</Link> */}
//           </LinkStyled>
//           <br />
//           <LinkStyled>
//             {/* <Link to={`#`}>My team</Link> */}
//           </LinkStyled>
//           <br />
//           <LinkStyled>
//             {/* <Link to={`#`}>My battle history</Link> */}
//           </LinkStyled>
//           <CloseMenuStyled>
//             <FontAwesomeIcon
//               icon={faTimes}
//               size='2x'
//               onClick={() => {
//                 setMenu(menu === 'visible' ? 'hidden' : 'visible')
//               }}
//             />
//           </CloseMenuStyled>
//         </ContentMenuStyled>
//       </Menu>

//       <HeaderStyled>
//         <UserIconStyled>
//           {/* <Link to={}>
//             <FontAwesomeIcon icon={faUser} size='2x' />
//           </Link> */}
//         </UserIconStyled>
//         Header
//         <OpenMenuStyled>
//           <FontAwesomeIcon
//             icon={faBars}
//             size='2x'
//             onClick={() => {
//               setMenu(menu === 'visible' ? 'hidden' : 'visible')
//             }}
//           />
//         </OpenMenuStyled>
//       </HeaderStyled>
//     </section>
//   )
// }

// const Menu = styled(motion.div)`
//   text-align: center;
//   width: 100%;
//   height: 100vh;
//   position: absolute;
//   top: 0;
//   z-index: 2;
//   background-color: #ee5253;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// const menuVariants = {
//   visible: {
//     x: 0
//   },
//   hidden: { x: -document.body.clientWidth }
// }

// const ContentMenuStyled = styled.div`
//   font-size: 120%;
// `

// const LinkStyled = styled.div`
//   margin: 1% 0;
// `

// const CloseMenuStyled = styled.div`
//   cursor: pointer;
//   font-size: 70%;
//   margin-top: 40%;
// `

// const OpenMenuStyled = styled.div`
//   cursor: pointer;
//   position: absolute;
//   right: 10px;
//   font-size: 70%;
// `

// const UserIconStyled = styled.div`
//   cursor: pointer;
//   position: absolute;
//   left: 10px;
//   font-size: 70%;
// `

// const HeaderStyled = styled.div`
//   background-color: #ee5253;
//   color: white;
//   height: 50px;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// export default Header

