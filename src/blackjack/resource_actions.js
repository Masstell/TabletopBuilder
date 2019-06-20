function creditResourcesFromBankToWallet (amount, bank, wallet) {
    let generatedResources = bank.removeAmountOfResources(amount);

    wallet.addToResources(generatedResources);
}

export { creditResourcesFromBankToWallet }