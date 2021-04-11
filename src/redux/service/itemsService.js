import repository from '../repository/repoAware';

export const getItems = async (routineId) => {
    const res = await repository.getItems(routineId);
    return res;
};

export const toggleItem = async (id, bool) => {
    console.log(id, bool);
    const res = await repository.updateItem(id, bool);
    return res;
};
