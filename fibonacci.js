//fibonacci sequence using a generator
function* fibonacci() {
  let fn1 = 0;
  let fn2 = 1;
  while (true) {
    yield fn1;
    [fn1, fn2] = [fn2, fn1 + fn2]
  }
}