import {nanoid} from "nanoid";

export function createItem(data) {
    return {
        id: nanoid(),
        todoId: data.id,
        text: data.text,
        done: false,
    }
}