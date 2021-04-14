import { firebaseDatabase } from './firebase';

class FbRepository {
    createRoutine(userId, routine) {
        return firebaseDatabase.ref(`${userId}/routines`).push().set(routine);
    }
    getRoutines(userId) {
        return firebaseDatabase.ref(`${userId}/routines`).get();
    }
    syncRoutines(userId, onUpdate) {
        const ref = firebaseDatabase.ref(`${userId}/routines`);
        ref.on('value', (snapshot) => {
            const value = snapshot.val();
            console.log(value);
            value && onUpdate(value);
        });
        return () => ref.off();
    }
}

export default FbRepository;
