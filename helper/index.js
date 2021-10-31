export const generateId = id => {
  if (!id) {
    return null;
  }

  if (+id < 1000) {
    return `#${("00" + id).slice(-3)}`;
  }

  return `${id}`;
};
