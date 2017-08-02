const byteTo = (byte, counter) => {
  const arr = ['byte', 'kb', 'mb', 'tb']
  if (Math.ceil(byte / 1024) >= 1024) {
    return byteTo(byte / 1024, counter + 1)
  } else {
    console.log(byte, arr[counter])
  }
}

byteTo(2048 * 2048, 0)
