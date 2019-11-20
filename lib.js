/**
 * code here cannot be changed, treat it as a 3rd party library
 */


/**
 * stub for some rest call (made with axios, got or whatever)
 * @param {number} ms
 * @returns {Promise<number>} 
 */
const restCall = ms => new Promise(resolve => setTimeout(resolve, ms, ms))

module.exports = {
  /**
   * @param {function(): Promise<any>} flow
   */
  async main(flow) {
    console.log('start')
    await restCall(700)
    console.log('before flow')
    await flow() // flow should return promise!
    console.log('end')
  },

  restCall,
}
