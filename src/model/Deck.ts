import { Card } from "./Card";

export class Deck {

    public cards: Card[]
    
    constructor(cards: Card[], shuffle = true) {
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
        let cards = this.cards.slice(0, nb - 1)
        this.cards = this.cards.slice(nb, this.cards.length - 1 - nb)
        return cards
    }
}