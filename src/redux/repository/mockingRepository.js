// TODO : userId를 매 요청시 API에 전달 x
//  -> 서버에서 그냥 요청한 브라우저의 쿠키 혹은 브라우저 정보를 통해 확인

export default class MockingRepository {

    constructor() {
        this.posts = [1, 2, 3].map(idx => ({ id: idx, title: 'post' + idx }));
        this.items = [
            {id: 1, postId: 1, name: "do homework", done: false },
            {id: 2, postId: 1, name: "exercise", done: false },
            {id: 3, postId: 1, name: "work", done: false },
            {id: 4, postId: 1, name: "do homework", done: true },
            {id: 5, postId: 2, name: "exercise", done: false },
            {id: 6, postId: 2, name: "shopping", done: false },
            {id: 7, postId: 2, name: "meet girlfriend", done: false },
            {id: 8, postId: 3, name: "egg", done: false },
            {id: 9, postId: 3, name: "milk", done: false },
            {id: 10, postId: 3, name: "cloth", done: true },
            {id: 11, postId: 3, name: "fish", done: false },
            {id: 12, postId: 3, name: "carrot", done: false },
        ]
        this.stocks = [
            {id: 1, name: 'test', parent: 0, isFixed: true},
            {id: 2, name: 'sample', parent: 0, isFixed: true},
            {id: 3, name: 'fake', parent: 1, isFixed: true},
            {id: 4, name: 'mock', parent: 1, isFixed: true},
            {id: 5, name: 'stock1', parent: 0, isFixed: false}
        ];
    }

    addPost(userId, post) {
        return new Promise((resolve, reject) => {
            const nextId = Math.max(...this.posts.map(post => post.id)) + 1
            const newPost = { id: nextId, title: post.title }

            const nextItemId = Math.max(...this.items.map(item => item.id)) + 1;
            const newItems = post.items.map((it, index) => (
                { id: nextItemId + index, postId: newPost.id, name: it.name, done: false }
            ))
            this.items.push(...newItems);

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
            const items = this.items.filter(it => it.postId === postId);

            resolve(items);
        });
    }

    toggleItem(userId, itemId) {
        const foundItem = this.items.find(it => it.id === itemId);
        if (foundItem) {
            foundItem.done = !foundItem.done
        }
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
