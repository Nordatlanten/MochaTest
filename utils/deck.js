module.exports.deck = () => {
  const deck = []
  const suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']

  for (let i = 0; i < 4; i++) {
    for (let x = 1; x < 14; x++) {
      deck.push({
        suit: suits[i],
        value: x
      })
    }
  }

  return deck
}
