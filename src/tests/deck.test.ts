import { Deck } from "../model/Deck";

let deck: Deck;

describe('deck', () => {
    
    // uns a function before each of the tests in this file runs
    beforeEach(() => {
        deck = new Deck()
    })

    test('initial deck length', () => {
        expect(deck.length).toBe(16)
    });

    test('draw default one card', () => {
        let cards = deck.pickCards()
        expect(deck.length).toBe(15)
    })

    test('draw default n card, n = 3', () => {
        const nbCardToDraw = 3
        deck.pickCards(nbCardToDraw)
        expect(deck.length).toBe(16 - nbCardToDraw)
    })

    test('draw default n card more than disponible, n = 18', () => {
        const nbCardToDraw = 18
        deck.pickCards(nbCardToDraw)
        expect(deck.length).toBe(0)
    })

    test('before each working', () => {
        expect(deck.length).toBe(16)
    });
})
