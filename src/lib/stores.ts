import { writable } from 'svelte/store';

export const blue = writable<boolean>(false);
export const red = writable<boolean>(false);
export const green = writable<boolean>(false);