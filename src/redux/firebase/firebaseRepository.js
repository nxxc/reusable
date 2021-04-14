import { firebaseDatabase } from './firebase';

class FbRepository {
    createRoutine(userId, routine) {
        console.log(routine);
        firebaseDatabase.ref(`${userId}/routines`).set(routine);
    }
    createItem(userId, item) {
        console.log(item);
        firebaseDatabase.ref(`${userId}/routines`).remove();
    }
    getItems() {}
    getRoutines() {}
    syncTodos() {}
    syncItems() {}
    syncRoutines(userId, onUpdate) {
        const ref = firebaseDatabase.ref(`${userId}/cards`);
        ref.on('value', (snapshot) => {
            const value = snapshot.val();
            console.log(value);
            value && onUpdate(value);
        });
        return () => ref.off();
    }
}

export default FbRepository;
