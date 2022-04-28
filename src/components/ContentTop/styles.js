import styled from 'styled-components'
import { Colors as c } from '../../styles/constants'
import background from '../../assets/bg-intro-desktop.svg'

export const Container = styled.section`
    height: 700px;
    width: 100%;
    background: url(${background}) left 700px top -250px no-repeat;
    background-size: cover ;
    /* background-size: cover 120%;
    background-position: -50px -150px;
    background-repeat: no-repeat; */

`

export const Wrapper = styled.div`
    margin: auto;
    max-width: calc(1300px + 1.5em);
    display: block;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
`

export const SectionLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  

`


export const SectionTitle = styled.h1`
    width: 500px;
    margin-bottom: 30px;
    font-size: 50px;
    color: ${c.primary.darkBlue};
    font-weight: 300;
`

export const SectionDescription = styled.span`
    color: ${c.secondary.grayishBlue};
    width: 500px;
    font-size: 18px;

`

export const SectionRight = styled.div`
    display: flex;
    flex: 1;

    & img{
    
        margin-left: 300px;
    }


`
export const ButtonContainer = styled.div`
    display: flex;
    width: 500px;
    margin-top: 30px;

`

export const InviteButton = styled.button`
    border-radius: 50px;
    width: 200px;
    height: 50px;
    font-weight: 600;
    color: white;
`