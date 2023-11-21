/**
 * Loads a Key value from localStorage.
 * @param {parameter} key The key value to be loaded from localStorage
 * @returns Returns the value as a string.
 */

export const load = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch {
    return null;
  }
};
