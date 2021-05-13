import repository from "../repository/repoAware";

export function getItems(postId) {
    // TODO : userId refactoring
    const userId = 1;

    return repository.getItems(userId, postId);
}
