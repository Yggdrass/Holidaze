/**
 *
 * @param {parameter} key The parameter name to be stored in localStorage.
 * @param {paramter} value The value to be connected with the Key in localStorage.
 */

export const save = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
