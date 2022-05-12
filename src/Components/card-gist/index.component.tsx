import { CardInterface } from "../Interfaces";
import { GistWrapper, Gist } from "./index.styles";


export const Card = (props:CardInterface, key:number) => (
    <GistWrapper key={key}>
        <Gist suit={props.suit}>{props.suit}</Gist>
        <Gist suit={props.suit}>{props.number}</Gist>
    </GistWrapper>
)