import { firebaseDatabase } from '../config/firebaseConfig';

class FbRepository {

    addRoutine(userId, routine) {
        const ref = firebaseDatabase.ref(`${userId}/routines`).push();
        const routineId = ref.key;
        return ref.set({
            routineId,
            ...routine,
        });
    }

    getRoutines(userId) {
        return firebaseDatabase.ref(`${userId}/routines`).get();
    }

    getItems(userId, routineId) {
        return new Promise((resolve, reject) => {
            resolve([
                { id: 1, text: 'item' + this.id, done: false }
            ]);
        });
    }

}

export default FbRepository;
