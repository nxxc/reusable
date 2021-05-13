import repository from '../repository/repoAware';

export function getPosts() {
    // TODO : userId refactoring
    const userId = 1;

    return repository.getPosts(userId);
}

export function addPost(post) {
    // TODO : userId refactoring
    const userId = 1;

    return repository.addPost(userId, post);
}
