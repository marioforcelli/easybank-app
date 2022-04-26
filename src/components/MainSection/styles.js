import styled from 'styled-components'
import { Colors as c } from '../../styles/constants'

export const Container = styled.section`
    background-color: ${c.secondary.veryLightGray};
    display: flex;
    height: 400px;
    flex-direction: column;
    flex: 1;
    padding: 0 120px;

`

export const SectionTop = styled.div`
    display: flex;
    height: 50%;
    width: 50%;
    flex-direction: column;
    margin-left: 70px;


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
    justify-content: space-around;
    
`