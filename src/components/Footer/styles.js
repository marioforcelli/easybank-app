import styled from 'styled-components'
import { Colors as c } from '../../styles/constants'
import { ReactComponent as Logo } from '../../assets/logo_footer.svg'
import { ReactComponent as Facebook } from '../../assets/icon-facebook.svg'
import { ReactComponent as Youtube } from '../../assets/icon-youtube.svg'
import { ReactComponent as Twitter } from '../../assets/icon-twitter.svg'
import { ReactComponent as Pinterest } from '../../assets/icon-pinterest.svg'
import { ReactComponent as Instagram } from '../../assets/icon-instagram.svg'

export const Container = styled.footer`
    height: 220px;
    background-color: ${c.primary.darkBlue};
    padding: 40px 0px;
    color: white;
    & li{
        margin-top: 15px;
    }

    @media(max-width: 860px) {
        height: 500px;

    }
`

export const FooterLogo = styled(Logo)`




    
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
    height: 100%;

    @media(max-width: 860px) {
        flex-direction: column;

    }
`

export const FooterLeft = styled.div`
    height: 100%;
    justify-content: space-around;
    display: flex;
    flex: 1;
    @media(max-width: 860px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }


    

`

export const LogoSocials = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    
    @media(max-width: 860px) {
        margin-bottom: 10px;
        width: 100%;
        align-items: center;
    }

`

export const FooterRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
    flex: 1;
    @media(max-width: 860px) {
        margin: 35px 0;
        width: 100%;
        align-items: center;
   
    }

`


export const Socials = styled.div`
    @media(max-width: 860px) {
        margin-top: 40px;
        width: 100%;
        margin: 25px 0px 0 0;
        display: flex;
        justify-content: center;
        align-items: center;

        & svg{
            position: relative;
            left: 2%;
            height: auto;
            width: 45px;
        }
    }



    
`

export const NavLeft = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media(max-width: 860px) {
        width: 100%;
        align-items: center;

    }

`

export const NavRight = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media(max-width: 860px) {
        width: 100%;
        align-items: center;

    }
`

export const FbIcon = styled(Facebook)`

`

export const YtIcon = styled(Youtube)`

`

export const TwIcon = styled(Twitter)`

`

export const PintIcon = styled(Pinterest)`

`

export const InstaIcon = styled(Instagram)`

`

export const InviteButton = styled.button`
    border-radius: 50px;
    width: 200px;
    height: 50px;
    font-weight: 600;
    color: white;
`

export const RightsReserved = styled.span`
    font-size: 8px;
    color: ${c.secondary.grayishBlue};
    @media(max-width: 860px) {
        margin-top: 25px;
       font-size: 14px;

    }

`