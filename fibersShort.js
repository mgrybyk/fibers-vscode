const Future = require('fibers/future')

const task = ms => Future.fromPromise(new Promise(resolve => setTimeout(resolve, ms, ms))).wait()

const flowWrapped = function () {
  console.log(task(10))
}.future()

flowWrapped()
