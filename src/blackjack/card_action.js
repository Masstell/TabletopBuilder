function transferCard(cardSource, cardDestination, card) {
    card = card || cardSource.chooseRandomCard(cardSource);
    cardDestination.addCard(card);
    cardSource.removeCard(card);
}
