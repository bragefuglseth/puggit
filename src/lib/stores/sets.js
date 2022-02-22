import { browser } from '$app/env';
import { writable } from 'svelte/store';

const LOCAL_SETS_KEY = 'puggit.sets';

// If script is executed on server, set the initial value to an empty array
const initialValue = browser
  ? JSON.parse(localStorage.getItem(LOCAL_SETS_KEY))
  : [];

export const sets = writable(initialValue);

// Whenever the value of this store updates, save it to localstorage
sets.subscribe((value) => {
  if (browser) {
    localStorage.setItem(LOCAL_SETS_KEY, JSON.stringify(value));
  }
});
