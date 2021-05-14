import repository from "../repository/repoAware";

export function getStocks() {
    // TODO : userId refactoring
    const userId = 1;

    return repository.getStocks(userId);
}

export function addStock(stock) {
    // TODO : userId refactoring
    const userId = 1;

    return repository.addStock(userId, stock);
}
