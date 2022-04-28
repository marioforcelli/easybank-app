import styled from 'styled-components'
import { Colors as c } from '../../styles/constants'

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 15rem;

    @media(max-width:1200px) {
        width: 6rem;
        align-items: center;
        text-align: center;

    }

    @media(max-width: 550px){
        width: 100%;
        text-align: center;
        padding: 35px;
    }


`

export const BtnArea = styled.div`
    padding: 30px;

`


export const TitleArea = styled.div`

    & h3{
        font-size: 24px;
        color: ${c.primary.darkBlue};
        font-weight: 300;
        margin-bottom: 30px;

        @media(max-width: 1000px) {
            font-size: 18px;
        }
    }

`

export const Description = styled.div`

    & span {
        color : ${c.secondary.grayishBlue};
    }

    @media(max-width:1200px) {

        & span{
            font-size: 14px;
        }
        
    }
    
`