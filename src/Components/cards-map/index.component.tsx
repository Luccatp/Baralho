import './index.styles'
import { CardsWrapper, } from './index.styles'
import { CardInterface } from '../Interfaces'
import { Card } from '../card-gist/index.component'

interface MapProps {
    cardInfo:Array<CardInterface>,
    handleShuffle:React.MouseEventHandler<HTMLButtonElement>
}

export const CardMap = (props:MapProps) => {
    return(
        <CardsWrapper>
            {props.cardInfo.map(info => (
                <Card key={info.key} suit={info.suit} number={info.number}/>
            ))}
            
            <button onClick={props.handleShuffle}>Shuffle</button>
        </CardsWrapper>
    )
}
