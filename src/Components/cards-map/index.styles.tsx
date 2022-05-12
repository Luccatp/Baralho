import styled from 'styled-components'


export const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ShuffleButton = styled.button`
    height: 5rem;
    width: 8rem;
    font-size: 20px;
    border: 3px solid black;
    border-radius: 20px;
    
    &:hover {
        cursor:pointer;
    }
`