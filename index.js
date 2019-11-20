const Future = require('fibers/future')

const { main, restCall } = require('./lib')

async function flow() {
  return flowWrapped().promise()
}

// I want flow to look like it is sync and be able to debug it
const flowWrapped = function () {
  let result1 = step(300)
  let result2 = step(result1 - 100)
  /**
   * put breakpoint somewhere here (ex line 12), run `step(100)`
   * All I see is `Canceled` in debug console
   */
  console.log(result1, result2)
}.future()

function step(ms) {
  // there might be lots of rest calls here
  return restCallFuture(ms).wait()
}

// wrapped
const restCallFuture = (ms) => Future.fromPromise(restCall(ms))

main(flow)
