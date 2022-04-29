import styled from 'styled-components'
import { Colors  as c} from '../../styles/constants'
import {ReactComponent as menu} from '../../assets/icon-hamburger.svg'
import {ReactComponent as close} from '../../assets/icon-close.svg'


export const Container = styled.header`
    background-color: white;
    position: fixed;
    width: 100%;
    height: 80px;
    @media(max-width:860px) {
        padding: 0 25px;
        
    }

`

export const Logo = styled.div`



`

export const Wrapper = styled.div`
    margin: auto;
    max-width: calc(1300px + 1.5em);
    height: 100%;
    width: 100%;
    display: block;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    
    z-index: 10;
`

export const Nav = styled.ul`
    display: flex;
    margin-top: 20px;

    @media(max-width:860px) {
        display: none;
        
    }

`

export const NavItem = styled.li`
    height: 50px;
    width: auto;
    list-style: none;
    margin: 10px;
    color: ${c.secondary.grayishBlue};

    :hover{
        cursor: pointer;
        border-bottom: 3px solid;
        border-image: linear-gradient(to left, ${c.primary.limeGreen}, ${c.primary.brightCyan});
        border-image-slice: 1;
    }   
`

export const InviteButton = styled.button`
    border-radius: 50px;
    width: 200px;
    height: 50px;
    font-weight: 600;
    color: white;
    @media(max-width:860px) {
        display: none;
        
    }
`

export const HamburgerMenu = styled(menu)`
    display: none;
    @media(max-width:860px) {
        display: block;
        
    }

    
`

export const CloseIcon = styled(close)`
    display: none;
    @media(max-width:860px) {
        display: block;
        
    }
`