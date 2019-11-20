const { main, restCall } = require('./lib')

async function flow() {
  let result1 = await step(900)
  let result2 = await step(result1 - 500)
  console.log(result1, result2)
}

async function step(ms) {
  // there might be lots of rest calls here
  return restCall(ms)
}

main(flow)
