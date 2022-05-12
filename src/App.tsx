import { useState } from 'react';
import { CardMap } from './Components/cards-map/index.component';
import INFO  from './card-data.json'

const App = () => {
    const [cardInfo, setCardInfo] = useState(INFO)

    const handleShuffle  = () => {
      const cardsShuffle = cardInfo.sort((a, b) => b.key - a.key)
      setCardInfo(cardsShuffle)
      console.log(cardInfo)
  }

    return(
      <CardMap handleShuffle={handleShuffle} cardInfo={cardInfo}/>
    )
}

export default App;
