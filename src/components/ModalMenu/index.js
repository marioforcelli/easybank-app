import * as C from './styles'

export default function ModalMenu(){
    return(
        <C.Container>
            <C.Wrapper>
                <C.Content>
                    <C.Nav>
                        <C.NavItem>Home</C.NavItem>
                        <C.NavItem>About</C.NavItem>
                        <C.NavItem>Contact</C.NavItem>
                        <C.NavItem>Blog</C.NavItem>
                        <C.NavItem>Careers</C.NavItem>
                    </C.Nav>
                </C.Content>

            </C.Wrapper>

        </C.Container>
    )
}