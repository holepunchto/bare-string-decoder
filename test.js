const test = require('brittle')
const Buffer = require('bare-buffer')
const { StringDecoder } = require('.')

test('basic', (t) => {
  const decoder = new StringDecoder('utf8')

  const cent = Buffer.from([0xc2, 0xa2])
  t.is(decoder.write(cent), '¢')

  const euro = Buffer.from([0xe2, 0x82, 0xac])
  t.is(decoder.write(euro), '€')
})

test('gradual', (t) => {
  const decoder = new StringDecoder('utf8')

  decoder.write(Buffer.from([0xe2]))
  decoder.write(Buffer.from([0x82]))

  t.is(decoder.end(Buffer.from([0xac])), '€')
})
