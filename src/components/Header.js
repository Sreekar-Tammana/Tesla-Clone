import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


function Header() {

    const [burgerStatus, setburgerStatus] = useState(false);

    return (
        <Container>
            <a href="section.js">
                <img src="/images/logo.svg" alt="" />
            </a>

            <LeftMenu>
               
                <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model X</a>
                <a href="#">Model Y</a>
              
            </LeftMenu>

            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>

                <CustomMenu onClick = { ()=> setburgerStatus(true)}/>
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                
                    <CloseWrapper>
                        <CustomClose onClick = { ()=> setburgerStatus(false)}/>
                    </CloseWrapper>
                
                <li><a href="#">Existing Invertory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial energy</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;


`

const LeftMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 600;
        padding: 0 20px;
        text-transform: uppercase;
        flex-wrap: nowrap;
        transition: .6s;
        
    }

    a:hover{
        background-color: rgba(54,69,79,.3);
        border-radius: 20px;
       
    }

    @media (max-width: 768px){
        display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    
    a{
        font-weight: 600;
        // padding: 0 12px;
        text-transform: uppercase;
        // flex-wrap: nowrap;
        margin-right: 10px;
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;

`

const BurgerNav = styled.div`
    width:300px;
    background: white;
    top: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 100;
    list-style: none;
    text-align: start;
    // display: flex;
    // flex-direction: column;
    padding: 20px;

    transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"}; 

    transition: transform 0.5s;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        a{
            font-weight: 600;
        }
    }

`

const CustomClose = styled(CloseIcon)`
    // float: right; //It can be done but not much effective :)
    cursor: pointer;

`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`