import styled from 'styled-components'
import { Colors as c } from '../../styles/constants'
import background from '../../assets/bg-intro-desktop.svg'

export const Container = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: auto;

`

export const SectionLeft = styled.div`
    flex: 1;
    display: flex;
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
`

export const SectionDescription = styled.span`
    color: ${c.secondary.grayishBlue};
    width: 500px;
    font-size: 18px;

`

export const SectionRight = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: flex-end;
    background-image: url(${background});
    background-size: cover 120%;
    background-position: -50px -150px;
    background-repeat: no-repeat;


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