/**
 * Removes a Key value from localStorage.
 * @param {parameter} key The key value to be removed from localStorage.
 * @returns the key value is removed from localStorage.
 */

export const remove = (key) => localStorage.removeItem(key);
