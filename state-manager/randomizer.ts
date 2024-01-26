import { createStore, createEvent } from 'effector';

export const $minVal = createStore<number>(0)
export const $maxVal = createStore<number>(10)
export const $randomVal = createStore<number>(0)

export const randomizeNumber = createEvent();
export const maxValPlace = createEvent();
export const minValPlace = createEvent();

$randomVal
.on(randomizeNumber, () => {
    const minVal = $minVal.getState();
    const maxVal = $maxVal.getState();
    return Math.floor(Math.random() * (maxVal - minVal + 1) + minVal);
});

$minVal
  .on(minValPlace, (_, newValue) => newValue);

$maxVal
  .on(maxValPlace, (_, newValue) => newValue);