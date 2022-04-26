import styled from 'styled-components'
import { Colors  as c} from '../../styles/constants'


export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    z-index: 10;
    background-color: white;
`

export const Logo = styled.div`

`

export const Nav = styled.ul`
    display: flex;

`

export const NavItem = styled.li`
    height: 40px;
    width: auto;
    list-style: none;
    margin: 10px;
    color: ${c.secondary.grayishBlue};

    :hover{
        cursor: pointer;
        border-bottom: 3px solid;
        border-image: linear-gradient(to left, ${c.primary.limeGreen}, ${c.primary.brightCyan});
        border-image-slice: 1;
    }   
`

export const InviteButton = styled.button`
    border-radius: 50px;
    width: 200px;
    height: 50px;
    font-weight: 600;
    color: white;
`