import styled, { css } from "styled-components"

interface CardStyleProps {
    suit:string
}

export const GistWrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: 15rem;
    width: 10rem;
    border: 2px solid black;
`

export const Gist = styled.h1`
    font-weight: bold;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    ${(p:CardStyleProps) => p.suit === 'diamond' ? 
    css`
    color:red;
    ` 
    : 
    css`
    color: black;
    `
    }
`