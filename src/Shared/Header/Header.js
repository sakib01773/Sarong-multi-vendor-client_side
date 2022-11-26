import { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../../ManyPages/hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import useAuth from '../../Hooks/useAuth'
import CartDrawer from '../../Components/CartDrawer'
import './Header.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown'

import styled, { ThemeProvider } from "styled-components";
import { darkTheme, GlobalStyle, GlobalTextStyle, LightTheme } from '../../Pages/Home/Mood/Theme';
import Home from '../../Pages/Home/Home';
import Login from '../../Login/Login/Login';
// import { darkTheme, LightTheme,GlobalStyle } from './Theme';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const StyledApp=styled.div`
color: ${(props)=>props.theme.color};

`;
const Header = () => {
    const { userLogOut, user, toggle, setToggle, handleClick, admin ,ad} = useAuth()

    console.log(user.photoURL)

    const [isSticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, []);


    const  [theme,setTheme]=useState("light");

    

    const themeToggler=()=>{
          theme==="light" ? setTheme("dark") : setTheme("light");
    }

    return (

        <div className='header-area'>
            <Navbar expand="lg"  bg="red"  className={(isSticky) ? "navbar  navbar-expand-lg  background-design texts fixed-top" : "navbar  navbar-expand-lg "}>
                <Container>
                {/* onClick={handleClick} */}
                    <NavLink  to="/" className='logo'><span>SARONG</span></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    {/* onClick={handleClick} */}
                        <Nav  className="ms-auto menu d-flex align-items-center">

                          
                            {/* <Nav style={{color:'white'}}> */}
                            <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        All Catagories
      </Dropdown.Toggle>

      <Dropdown.Menu className='drop-menu'>
        {/* start  */}

        <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        Share ( শাড়ি )
      </Dropdown.Toggle>

      <Dropdown.Menu className='drops-menu'>
        <Dropdown.Item className='down-color' href="/tat">Weaving Sares ( তাঁতের শাড়ি )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/all-categories">ALL Categories ( সব ধরনের )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/silk">Silk Sares ( রেশম শাড়ি )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/halfsilk">Half Silk ( অর্ধেক সিল্ক )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/jamdani">Jamdani ( জামদানি শাড়ি )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/cotton">Cotton Sares ( তুলা শাড়ি )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/katan">Katan ( কাতান শাড়ি )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/tissure">Tissure Sares ( টিস্যু শাড়ি )</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>

        {/* end  */}


         {/* start  */}

         <Dropdown>
      <Dropdown.Toggle className='drops' id="dropdown-basic">
        Industry ( শিল্প )
      </Dropdown.Toggle>

      <Dropdown.Menu className='drops-menu'>
      <Dropdown.Item className='down-color' href="/NakshiKatha">Nakshi kantha ( নকশি কাঁথা )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/NakshiPakha">Nakshi Pakha ( নকশী পাখা )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/shitalPati">Shital Pati ( শীতল পাটি )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/pottery">Pottery ( মৃত্শিল্প )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/dhatobshilpo">Metal Industry ( ধাতব শিল্প )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/darushilpo">Liquor Industry ( দারুশিল্প )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/jhinukshilpo">Oyster Industry ( ঝিনুক শিল্প )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/putulshilpo">Putul Shilpo ( পুতুল শিল্প )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/pitolkasha">Brass Industry ( পিতলকাসা শিল্প )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/bateshilpo">Bate Shilpo ( বাটি শিল্প )</Dropdown.Item>
        <Dropdown.Item className='down-color' href="/shankho">Shankho Shilpo ( শঙ্খশিল্প )</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>

        {/* end  */}
        
        {/* <Dropdown.Item className='down-color' href="#/action-3">Punjabi</Dropdown.Item> */}
        {/* <Dropdown.Item className='down-color' href="#/action-3">Tupi</Dropdown.Item> */}
        {/* <Dropdown.Item className='down-color' href="#/action-3">Shirt</Dropdown.Item>
        <Dropdown.Item className='down-color' href="#/action-3">Watch</Dropdown.Item>
        <Dropdown.Item className='down-color' href="#/action-3">Shoe</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
                            {/* </Nav> */}
                            <Nav.Link as={NavLink} to="/updateCollection" className='menu-item'>Collection</Nav.Link>
                            <Nav.Link as={NavLink} to="/adminproductshow" className='menu-item'>Product</Nav.Link>
                            <Nav.Link as={NavLink} to="/about" className='menu-item'>About</Nav.Link>
                           
                            <Nav.Link as={NavLink} to="/contact" className='menu-item'>Contact</Nav.Link>
                           <CartDrawer/>

                           <ThemeProvider
                            theme={theme==="light" ? LightTheme : darkTheme}
                           >
                            <GlobalStyle></GlobalStyle>
                            {/* <GlobalTextStyle></GlobalTextStyle> */}
                            <StyledApp style={{color:"white"}}>

                      {/* <DarkModeIcon onClick={()=>themeToggler()}></DarkModeIcon>      */}
<button style={{background:"#7E2231", color:"white",border:"1px solid #7E2231"}} onClick={()=>themeToggler()}><DarkModeIcon style={{fontSize:"30px"}}></DarkModeIcon></button>
</StyledApp>

                           </ThemeProvider>
                          
                            
                           
                            {ad? <Nav.Link as={NavLink} to="/admin-dashboard/welcome" className='menu-item'>Admin Dashboard</Nav.Link> : ""}
                        </Nav>
                         {!user.email ? <Nav.Link as={NavLink} to="/login" className='menu-item'>
                            Login
                        </Nav.Link>
                            :

                            <>
                              
                                <img onClick={() => setToggle(!toggle)} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="user" className="user-image " />
                                
                            </>
                        } 


                        {user.email && <div className={toggle ? "toggle-menu shadow-lg active" : "toggle-menu"}>
                        <Nav.Link as={NavLink} to="/dashboard/welcome" className='menu-item'>Dashboard</Nav.Link>
                            <Link style={{textDecoration:"none"}} to={'/'}><li onClick={userLogOut}>Log Out</li></Link>
                        </div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; 