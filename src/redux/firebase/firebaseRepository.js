import { firebaseDatabase } from './firebase';

class FbRepository {
    createRoutine(userId, routine) {
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
    syncRoutines(userId, onUpdate) {
        const ref = firebaseDatabase.ref(`${userId}/routines`);
        ref.on('value', (snapshot) => {
            const value = snapshot.val();
            value && onUpdate(value);
        });
        return () => ref.off();
    }
}

export default FbRepository;
