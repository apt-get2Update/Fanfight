
const readline = require("readline");

const cl = readline.createInterface(process.stdin, process.stdout);
const getInput = function(q) {
  return new Promise((res, rej) => {
    cl.question(q, answer => {
      res(answer);
    });
  });
};

const solve = async () =>{
  let line1 = await getInput("Enter n,k");
  let line2 = await getInput("Enter Array");
  let data = line1.split(" ");
  let n=data[0], k = data[1];
  let array = line2.split(" ");
  minimalDeviation(n,k,array);
}

solve();

function minimalDeviation(n, k, a) {
  let ar = [],
    sum = 0;
  for (let i = 1; i < n; i++) {
    ar.push(Math.pow(a[i], 2) - Math.pow(a[i - 1], 2));
  }
  for (let i = 0; i < n - k; i++) {
    sum += ar[i];
  }
  console.log(sum);
}
