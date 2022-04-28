import styled from 'styled-components'
import { Colors as c } from '../../styles/constants'

export const Container = styled.section`
    background-color: ${c.secondary.veryLightGray};
    padding: 80px 0;

`

export const Wrapper = styled.div`
    margin: auto;
    max-width: calc(1300px + 1.5em);
    width: 100%;
    display: block;
`

export const Content = styled.div`

    flex-direction: column;
    display: flex;
`

export const SectionTop = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    

    @media (max-width: 640px) {
        align-items: center;
        text-align: center;
       

        
    }


`

export const ReasonTitle = styled.h2`
   
    font-size: 28px;
    color: ${c.primary.darkBlue};
    font-weight: 300;

    @media (max-width: 640px) {
        font-size: 24px;
        

    
    }



`

export const ReasonDescription = styled.span`
    margin-top: 20px;
    width: 600px;
    color: ${c.secondary.grayishBlue};
    @media (max-width: 640px) {
        font-size: 14px;
        width: 100%;

    
    }

`

export const SectionBottom = styled.div`
    height: 50%;
    display: flex;
    justify-content: space-between;

    @media(max-width: 550px) {

        flex-direction: column;
        align-items: center;
    }
    
`