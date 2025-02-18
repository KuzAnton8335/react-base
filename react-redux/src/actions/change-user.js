const fecthUserDataMock = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        name: "Петр",
        age: 40,
      });
    }, 1500);
  });
};

export const changeUserAsync = dispatch =>
  fecthUserDataMock().then(userDataFromServer =>
    dispatch({
      type: "CHANGE_USER",
      payload: userDataFromServer,
    })
  );
