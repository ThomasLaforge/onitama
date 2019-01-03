import { Card } from "./Card";
import { IJsonCard } from "./Onitama";

const DEFAULT_CARDS = require('../datas/move_cards.json').map( 
    (cJson: IJsonCard) => new Card(cJson.name, cJson.description, cJson.pattern)
)


export class Deck {

    public cards: Card[]
    
    constructor(cards: Card[] = DEFAULT_CARDS, shuffle = true) {
        this.cards = cards
        if(shuffle){
            this.shuffle()
        }
    }

    shuffle(){
        function shuffler(a) {
            let b = []
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [b[i], b[j]] = [a[j], a[i]];
            }
            return b;
        }

        this.cards = shuffler(this.cards) 
    }

    pickCards(nb = 1){
        let cards = this.cards.slice(0, nb)
        this.cards = this.cards.slice(nb, this.cards.length)
        return cards
    }

    get length(){
        return this.cards.length
    }
}