export default class MockingRepository {

    constructor() {
        this.routines = [1, 2, 3].map(idx => ({ id: idx, title: 'routine' + idx }));
    }

    addRoutine(userId, routine) {
        return new Promise((resolve, reject) => {
            const nextId = Math.max(...this.routines.map(routine => routine.id)) + 1
            const newRoutine = { id: nextId, title: routine.title }

            this.routines = [...this.routines, { ...newRoutine }];

            resolve(newRoutine);
        });
    }

    getRoutines(userId) {
        return new Promise((resolve, reject) => {
            resolve(this.routines);
        });
    }

    getItems(userId, routineId) {
        return new Promise((resolve, reject) => {
            const items = [1, 2, 3].map(idx => {
                const itemId = routineId + '-' + idx
                return { id: itemId, text: 'item-' + itemId, done: false }
            });

            resolve(items);
        });
    }

}
