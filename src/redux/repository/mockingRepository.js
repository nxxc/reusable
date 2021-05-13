export default class MockingRepository {

    constructor() {
        this.posts = [1, 2, 3].map(idx => ({ id: idx, title: 'post' + idx }));
    }

    addPost(userId, post) {
        return new Promise((resolve, reject) => {
            const nextId = Math.max(...this.posts.map(post => post.id)) + 1
            const newPost = { id: nextId, title: post.title }

            this.posts = [...this.posts, { ...newPost }];

            resolve(newPost);
        });
    }

    getPosts(userId) {
        return new Promise((resolve, reject) => {
            resolve(this.posts);
        });
    }

    getItems(userId, postId) {
        return new Promise((resolve, reject) => {
            const items = [1, 2, 3].map(idx => {
                const itemId = postId + '-' + idx
                return { id: itemId, text: 'item-' + itemId, done: false }
            });

            resolve(items);
        });
    }

}
