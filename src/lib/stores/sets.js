import { browser } from '$app/env';
import { writable } from 'svelte/store';

const LOCAL_SETS_KEY = 'puggit.sets';

// If script is executed on server, set the initial value to an empty array
function getInitialValue() {
  if (browser && localStorage.getItem(LOCAL_SETS_KEY))
    return JSON.parse(localStorage.getItem(LOCAL_SETS_KEY));
  return [];
}

export const sets = writable(getInitialValue());

// Whenever the value of this store updates, save it to localstorage
sets.subscribe((value) => {
  if (browser) {
    localStorage.setItem(LOCAL_SETS_KEY, JSON.stringify(value));
  }
});
