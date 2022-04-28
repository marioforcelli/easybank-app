import * as C from './styles'

export default function Footer(){
    return(
        <C.Container>
            <C.Wrapper>
                <C.Content>
                    <C.FooterLeft>
                        <C.LogoSocials>
                            <C.FooterLogo/>
                            <C.Socials>
                                <C.FbIcon/>
                                <C.YtIcon/>
                                <C.TwIcon/>
                                <C.PintIcon/>
                                <C.InstaIcon/>
                        </C.Socials>
                        </C.LogoSocials>
                        <C.NavLeft>
                            <ul>About Us</ul>
                            <ul>Contact</ul>
                            <ul>Blog</ul>
                        </C.NavLeft>
                        <C.NavRight>
                            <ul>Careers</ul>
                            <ul>Support</ul>
                            <ul>Privacy Policy</ul>
                        </C.NavRight>
                    </C.FooterLeft>
                    <C.FooterRight>
                        <C.InviteButton>Request Invite</C.InviteButton>
                        <C.RightsReserved>Request Invite © Easybank. All Rights Reserved</C.RightsReserved>
                    </C.FooterRight>
                </C.Content>
            </C.Wrapper>
        </C.Container>
    )
}