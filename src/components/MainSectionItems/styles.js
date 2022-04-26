import styled from 'styled-components'
import { Colors as c } from '../../styles/constants'

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 15rem;

`

export const BtnArea = styled.div`

`


export const TitleArea = styled.div`

    & h3{
        font-size: 24px;
        color: ${c.primary.darkBlue};
        font-weight: 300;
        margin-bottom: 30px;
    }

`

export const Description = styled.div`

    & span {
        color : ${c.secondary.grayishBlue};
    }
    
`