export default (fn, ms) => {
  let timeoutId = 0;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => fn(...args), ms);
  };
};
