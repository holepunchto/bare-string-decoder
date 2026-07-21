# bare-string-decoder

`string_decoder` shim for Bare

```
npm i bare-string-decoder
```

## License

Apache-2.0

<!-- bare-refgen:api start -->

## API

### StringDecoder

#### `new StringDecoder(encoding: BufferEncoding)`

[source](https://github.com/holepunchto/bare-string-decoder/blob/v1.0.0/index.d.ts#L4)

Create a `StringDecoder` for the given `encoding`.

**Parameters**

| Parameter  | Type             | Default | Description                                                                                             |
| ---------- | ---------------- | ------- | ------------------------------------------------------------------------------------------------------- |
| `encoding` | `BufferEncoding` | —       | The character encoding the bytes are decoded from (a `BufferEncoding` such as `'utf8'` or `'utf16le'`). |

#### `end(buffer: string | Buffer): string`

[source](https://github.com/holepunchto/bare-string-decoder/blob/v1.0.0/index.d.ts#L8)

Decode any remaining buffered bytes together with `buffer` and return the resulting string, flushing incomplete sequences.

**Parameters**

| Parameter | Type               | Default | Description                                                                            |
| --------- | ------------------ | ------- | -------------------------------------------------------------------------------------- |
| `buffer`  | `string \| Buffer` | —       | A final chunk of bytes to decode together with any bytes buffered from previous calls. |

**Returns** `string` — The decoded string, including any bytes buffered from previous calls.

#### `write(buffer: string | Buffer): string`

[source](https://github.com/holepunchto/bare-string-decoder/blob/v1.0.0/index.d.ts#L6)

Decode `buffer` and return the resulting string, retaining any trailing incomplete multi-byte sequence to be completed by a subsequent call.

**Parameters**

| Parameter | Type               | Default | Description          |
| --------- | ------------------ | ------- | -------------------- |
| `buffer`  | `string \| Buffer` | —       | The bytes to decode. |

**Returns** `string` — The decoded string, excluding any trailing incomplete multi-byte sequence, which is buffered for the next call.

<!-- bare-refgen:api end -->
