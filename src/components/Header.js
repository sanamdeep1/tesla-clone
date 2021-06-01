import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Section from './Section'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    return (
        <Container>
            <a href="#"><img src="/images/logo.svg"></img></a>
            <MenuGroup>
                <div>Model S</div>
                <div>Model X</div>git
                <div>Model Y</div>
            </MenuGroup>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <MenuIconContainer onClick={()=>setBurgerStatus(true)}>
                    <MenuIcon/>
                </MenuIconContainer>

            </RightMenu>
            <BurgerNav status={burgerStatus}>
                
                <CloseContainer onClick={()=>setBurgerStatus(false)}>
                    <Close />
                </CloseContainer>
                
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging
                </a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    min-height: 60px;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;

`
const MenuGroup = styled.div`
    display: flex;
    text-transform: uppercase;
    div {
        font-weight: 600;
        padding: 0 10px;
        cursor: pointer;
    }

    @media(max-width: 768px) {
        display: none;
    }


`
const RightMenu = styled.div`
    display: flex;
    align-item: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        padding-right: 10px;

    }
`
const MenuIconContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

`
const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Close = styled(CloseIcon)`
    cursor: pointer;

`
const BurgerNav = styled.div`
    position: fixed;
    width: 300px;
    background: white;
    top: 0;
    right: 0;
    botton: 0;
    padding: 20px;
    list-style: none;
    transform: ${props => props.status ? 'translateX(0)' : 'translateX(100%)' };
    transition: transform 0.2s ease-in;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        a {
            font-weight: 600;

        }
    }
`


