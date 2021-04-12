export default class MockingRepository {
    getAllRoutines() {
        return new Promise((resolve, reject) => {
            resolve([
                {
                    id: 1,
                    title: 'first',
                },
                {
                    id: 2,
                    title: 'tw',
                },
                {
                    id: 3,
                    title: 'th',
                },
            ]);
        });
    }
    addRoutine() {}
    getAllTodos() {}
    getItems(routineId) {
        return new Promise((resolve, reject) => {
            let items = [
                {
                    id: routineId === 1 ? 1 : 4,
                    text: routineId === 1 ? 1 : 4,
                    done: false,
                },
                {
                    id: routineId === 1 ? 2 : 5,
                    text: routineId === 1 ? 2 : 5,
                    done: false,
                },
                {
                    id: routineId === 1 ? 3 : 6,
                    text: routineId === 1 ? 3 : 6,
                    done: false,
                },
            ];
            resolve(items);
        });
    }
    updateItem(itemId, bool) {
        return new Promise((res, rej) => {
            res(true);
            rej(false);
        });
    }
}
