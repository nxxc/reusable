import { firebaseDatabase } from '../config/firebaseConfig';

class FbRepository {

    addPost(userId, post) {
        const ref = firebaseDatabase.ref(`${userId}/posts`).push();
        const postId = ref.key;
        return ref.set({
            postId,
            ...post,
        });
    }

    getPosts(userId) {
        return firebaseDatabase.ref(`${userId}/posts`).get();
    }

    getItems(userId, postId) {
        return new Promise((resolve, reject) => {
            resolve([
                { id: 1, text: 'item' + this.id, done: false }
            ]);
        });
    }

    toggleItem(userId, itemId) {}

    getStocks(userId) {
        return new Promise((resolve, reject) => {
            resolve([]);
        });
    }

    addStock(userId, stock) {
        return new Promise((resolve, reject) => {
            resolve();
        });
    }

}

export default FbRepository;
