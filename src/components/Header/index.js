import { Button } from "./styles";
import * as C from './styles'
import logo from '../../assets/logo.svg' 
import { useState } from "react";
import ModalMenu from "../ModalMenu";

export default function Header(){

    const [showModal, setShowModal] = useState(false)

    const handleMenuClick = () =>{
        if(!showModal){
            setShowModal(true)
        }else{
            setShowModal(false)
        }

    }

    return (
        <C.Container>
            <C.Wrapper>
                <C.Content>
                    <C.Logo>
                        <img src={logo}/>
                    </C.Logo>
                    <C.Nav>
                        <C.NavItem>Home</C.NavItem>
                        <C.NavItem>About</C.NavItem>
                        <C.NavItem>Contact</C.NavItem>
                        <C.NavItem>Blog</C.NavItem>
                        <C.NavItem>Careers</C.NavItem>
                    </C.Nav>
                    <C.InviteButton>Request Invite</C.InviteButton>
                    
                    {!showModal &&  <C.HamburgerMenu onClick={handleMenuClick}/> || showModal && (
                        <>
                            <C.CloseIcon onClick={handleMenuClick}/> <ModalMenu/>
                        </>
                    ) }
                    
                </C.Content>


            </C.Wrapper>

        </C.Container>

    )
}