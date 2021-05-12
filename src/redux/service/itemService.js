import repository from "../repository/repoAware";

export function getItems(routineId) {
    // TODO : userId refactoring
    const userId = 1;

    return repository.getItems(userId, routineId);
}
