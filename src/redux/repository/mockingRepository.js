export default class MockingRepository {

    constructor() {
        this.posts = [1, 2, 3].map(idx => ({ id: idx, title: 'post' + idx }));
        this.stocks = [
            {id: 1, name: 'test', parent: null, isFixed: true},
            {id: 2, name: 'sample', parent: null, isFixed: true},
            {id: 3, name: 'fake', parent: 1, isFixed: true},
            {id: 4, name: 'mock', parent: 1, isFixed: true},
            {id: 5, name: 'stock1', parent: null, isFixed: false}
        ];
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
                return { id: itemId, name: 'item-' + itemId, stockId: null, done: false }
            });

            resolve(items);
        });
    }

    getStocks(userId) {
        return new Promise((resolve, reject) => {
            resolve(this.stocks);
        });
    }

    addStock(userId, stock) {
        return new Promise((resolve, reject) => {
            const nextId = Math.max(...this.stocks.map(stock => stock.id)) + 1;
            const newStock = { id: nextId, ...stock }
            this.stocks = [...this.stocks, newStock];

            resolve(newStock);
        });
    }

}
