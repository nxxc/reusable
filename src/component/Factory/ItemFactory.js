import {nanoid} from "nanoid";

export function createItem(value) {
    return {
        id: nanoid(),
        text: value,
        done: false,
    }
}