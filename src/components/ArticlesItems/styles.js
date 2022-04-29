import styled from 'styled-components'
import { Colors  as c} from '../../styles/constants'


export const Container = styled.article`
    padding-right: 15px;
    display: flex;
    flex-direction: column;
    
    @media(max-width:860px) {
        align-items: center;
        
        :not(:first-child){
            margin-top: 100px;
        }
        
    }
`

export const ArtImg = styled.img`
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    object-fit: cover;

`

export const Author = styled.span`
    color: ${c.secondary.grayishBlue};
    font-size: 9px;
`

export const Title = styled.h2`
    margin: 5px 0px 25px;
    font-size: 24px;
    color: ${c.primary.darkBlue};
    font-weight: 300;
`

export const Description = styled.span`
    color: ${c.secondary.grayishBlue};
    font-size: 14px;

    @media(max-width:860px) {
        text-align: center;
    }
`