let index = 0;

export const fetchData = () => {
  return new Promise((resolve, reject) => {
    const arr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    try {
      resolve({ progress: arr[index + 1], error: false });
      index += 1;
    } catch (err) {
      reject({ progress: arr[index + 1], error: true });
    }
  });
};
