sumorproduct = (n) => {
  let sum = 0;
  let product = 1;
  for (i = 1; i <= n; i++) {
    sum = sum + i;
    product = product * i;
  }
  return [sum, product];
};

console.log(sumorproduct(10));
