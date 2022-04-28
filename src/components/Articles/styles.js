import styled from 'styled-components'
import {Colors as c} from '../../styles/constants'

export const Container = styled.section`
    display: block;
    padding: 50px 0;
`

export const Wrapper = styled.div`
    margin: auto;
    max-width: calc(1300px + 1.5em);
    width: 100%;
    display: block;
`

export const Content = styled.div`


`

export const Title = styled.h1`
    margin-bottom: 50px;
    font-size: 28px;
    font-weight: 300;
    color: ${c.primary.darkBlue};
`

export const ArticleArea = styled.div`
    display: flex;
    justify-content: space-between;
`