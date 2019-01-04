import { Card } from "./Card";
import { IJsonCard } from "./Onitama";

const DEFAULT_CARDS: Card[] = require('../datas/move_cards.json').map( 
    (cJson: IJsonCard) => new Card(cJson.name, cJson.description, cJson.pattern)
)
const promoCards: Card[] = require('../datas/promo_move_cards.json').map( 
    (cJson: IJsonCard) => new Card(cJson.name, cJson.description, cJson.pattern)
)


export class Deck {

    public cards: Card[]
    
    constructor(withPromoCards = false, shuffle = true) {
        this.cards = withPromoCards ? DEFAULT_CARDS.concat(promoCards) : DEFAULT_CARDS
        if(shuffle){
            this.shuffle()
        }
    }

    shuffle(){
        function shuffler(a: Card[]) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

        this.cards = shuffler(this.cards.slice()) 
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