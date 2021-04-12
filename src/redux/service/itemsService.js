import repository from '../repository/repoAware';

class ItemService {
    constructor(repository) {
        this.repository = repository;
    }
    getItems = async (routineId) => {
        const res = await this.repository.getItems(routineId);
        return res;
    };
    toggleItem = async (id, bool) => {
        console.log(id, bool);
        const res = await repository.updateItem(id, bool);
        return res;
    };
}

export default new ItemService(repository);
