/**
 * Creates a deep clone of an object or array, including nested objects and arrays.
 *
 * @param {Object|Array} obj The object or array to clone.
 * @return {Object|Array} The deep-cloned object or array.
 */
export const deepClone = (obj) => {
  if (typeof obj === "function") {
    throw new Error("Unable to copy obj! Its type isn't supported.");
  }

  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Array) {
    let copy = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      copy[i] = deepClone(obj[i]);
    }
    return copy;
  }

  if (obj instanceof Object) {
    let copy = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = deepClone(obj[key]);
      }
    }
    return copy;
  }

  throw new Error("Unable to copy obj! Its type isn't supported.");
};
