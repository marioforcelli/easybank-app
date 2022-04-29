import styled from 'styled-components'
import { Colors as c } from '../../styles/constants'
import background from '../../assets/bg-intro-desktop.svg'
import backgroundMobile from '../../assets/bg-intro-mobile.svg' 
import mockups from '../../assets/mockups.png' 

export const Container = styled.section`
    height: 700px;
    width: 100%;
    background: url(${background}) left 700px top -250px no-repeat;
    background-size: cover ;

    @media(max-width: 1360px) {
        background: url(${background}) left 400px top -150px no-repeat;
        height: 600px;
        
    }
    @media(max-width: 960px) {
        
        height: 400px;
        
    }

    @media(max-width: 860px) {
        background: none;
        height: 1000px;
    }   

    /* background-size: cover 120%;
    background-position: -50px -150px;
    background-repeat: no-repeat; */

`

export const Wrapper = styled.div`
    margin: auto;
    max-width: calc(1300px + 1.5em);
    display: block;

    @media(max-width: 860px) {
        height: 100%;
        
    }
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;

    @media(max-width: 860px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        height: 100%;
    }   
`

export const SectionLeft = styled.div`
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  

`


export const SectionTitle = styled.h1`
    width: 500px;
    margin-bottom: 30px;
    font-size: 50px;
    color: ${c.primary.darkBlue};
    font-weight: 300;

    @media (max-width: 860px) {
        text-align: center;
        
    }
`

export const SectionDescription = styled.span`
    color: ${c.secondary.grayishBlue};
    width: 500px;
    font-size: 18px;

    @media (max-width: 860px) {
        text-align: center;
        
    }

`

export const SectionRight = styled.div`
    display: flex;
    flex: 1;
    width: 100%;

    @media(max-width: 860px) {
        flex: 2;
        background: url(${mockups}) center  top 0 no-repeat, url(${backgroundMobile}) center no-repeat;
        background-size: 500px, cover;
    }


    & img{
        margin-left: 300px;

        @media(max-width: 1360px) {
        margin-left: 0px;
        width: 600px;
        
        }

        @media(max-width: 960px) {
            margin-left: 0px;
            width: 400px;
            
        }
        @media(max-width: 860px) {
            display: none;
            
        }



    }


`
export const ButtonContainer = styled.div`
    display: flex;
    width: 500px;
    margin-top: 30px;

    @media (max-width: 860px) {
        justify-content: center;
        
    }
`

export const InviteButton = styled.button`
    border-radius: 50px;
    width: 200px;
    height: 50px;
    font-weight: 600;
    color: white;
`