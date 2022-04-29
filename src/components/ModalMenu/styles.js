import styled from "styled-components";
import { Colors as c } from "../../styles/constants";

export const Container = styled.div`
    display: flex;
    height: 200px;
    width: calc(100vw - 70px);
    position: absolute;
    top: 100%;
    background-color: white;
    box-shadow: 200px 0 0px 1000px rgba(0,0,0,0.4);
    border-radius: 6px;

    @media(min-width:860px) {
        display: none;
        
    }

`

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    

`

export const Content = styled.div`
    display: flex;
    color: ${c.primary.darkBlue};
    font-weight: 500;
    align-items: center;
    height: 100%;
    width: 100%;


`

export const Nav = styled.ul`
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const NavItem = styled.li`
    margin: 4px;

`