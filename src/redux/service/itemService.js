import repository from "../repository/repoAware";

export function getItems(postId) {
    // TODO : userId refactoring
    const userId = 1;

    return repository.getItems(userId, postId);
}

export function toggleItem(itemId) {
    // TODO : userId refactoring
    const userId = 1;

    return repository.toggleItem(userId, itemId);
}
