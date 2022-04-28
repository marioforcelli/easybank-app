import styled from 'styled-components'
import { Colors  as c} from '../../styles/constants'


export const Container = styled.article`
    padding-right: 15px;
`

export const ArtImg = styled.img`
    width: 100%;
    height: 200px;
    margin-bottom: 10px;


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
`