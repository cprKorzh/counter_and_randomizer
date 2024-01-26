import { createStore, createEvent } from 'effector';

export const $counter = createStore<number>(0);
export const counterPlus = createEvent();
export const counterMinus = createEvent();
$counter
.on(counterPlus, (num) => num + 1)
.on(counterMinus, (num) => num - 1)