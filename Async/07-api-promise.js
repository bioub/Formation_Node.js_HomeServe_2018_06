function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay / 1000);
    }, delay);
  });
}

timeout(1000)
  .then((sec) => {
    console.log(`${sec}s`);
  });

function randomTimeout() {
  return timeout(Math.floor(Math.random() * 1001));
}

Promise.all([
  randomTimeout(),
  randomTimeout(),
]).then(([sec1, sec2]) => {
  console.log(`Random 1 : ${sec1}s`);
  console.log(`Random 2 : ${sec2}s`);
});
