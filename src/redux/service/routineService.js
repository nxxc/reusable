import repository from '../repository/repoAware';

export function getRoutines() {
    // TODO : userId refactoring
    const userId = 1;

    return repository.getRoutines(userId);
}

export function addRoutine(routine) {
    // TODO : userId refactoring
    const userId = 1;

    return repository.addRoutine(userId, routine);
}
