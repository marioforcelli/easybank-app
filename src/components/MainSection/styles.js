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
    height: 30%;
    width: 50%;
    flex-direction: column;
    margin-bottom: 50px;


`

export const ReasonTitle = styled.div`
    & h2{
        font-size: 28px;
        color: ${c.primary.darkBlue};
        font-weight: 300;
    }
`

export const ReasonDescription = styled.div`
    margin-top: 20px;
    width: 600px;
    color: ${c.secondary.grayishBlue};
`

export const SectionBottom = styled.div`
    height: 50%;
    display: flex;
    justify-content: space-between;
    
`