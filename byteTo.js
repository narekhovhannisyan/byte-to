/**
 * @param {number} byte - Byte to be converted.
 * @return {object} - Object that contains converted byte size and measure unit.
 * @description Converts byte into byte, kb, mb, gb, tb depending on size.
 */
const byteTo = (byte) => {
  const UNITS = ['byte', 'kb', 'mb', 'gb', 'tb']
  const getPowAndMult = (byte, counter = 0) => {
    if (byte >= 1024) {
      return getPowAndMult(byte / 1024, counter + 1)      
    } else {
      return {
        size: Number(byte).toFixed(3),
        unit: UNITS[counter]
      }
    }
  }
  return getPowAndMult(byte)
}
