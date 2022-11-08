import { writable } from 'svelte/store';

export const blue = writable<boolean>(localStorage.blue === 'true');
export const red = writable<boolean>(localStorage.red === 'true');
export const green = writable<boolean>(localStorage.green === 'true');

blue.subscribe((value) => (localStorage.blue = String(value)));
red.subscribe((value) => (localStorage.red = String(value)));
green.subscribe((value) => (localStorage.green = String(value)));

export const clothing = writable([
  { name: 'red', selected: false },
  { name: 'green', selected: false },
  { name: 'blue', selected: false },
]);

clothing.subscribe;
