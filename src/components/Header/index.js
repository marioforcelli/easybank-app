import { Button } from "./styles";
import * as C from './styles'
import logo from '../../assets/logo.svg' 

export default function Header(){

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

                </C.Content>


            </C.Wrapper>

        </C.Container>

    )
}