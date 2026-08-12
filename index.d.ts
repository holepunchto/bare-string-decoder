import Buffer, { type BufferEncoding } from 'bare-buffer'

/**
 * Decodes a `Buffer` into a string incrementally, buffering incomplete multi-byte sequences across
 * calls so they are not split.
 */
export class StringDecoder {
  /**
   * Create a `StringDecoder` for the given `encoding`.
   * @param encoding - The character encoding the bytes are decoded from (a `BufferEncoding` such as
   * `'utf8'` or `'utf16le'`).
   */
  constructor(encoding: BufferEncoding)

  /**
   * Decode `buffer` and return the resulting string, retaining any trailing incomplete multi-byte
   * sequence to be completed by a subsequent call.
   * @param buffer - The bytes to decode.
   * @returns The decoded string, excluding any trailing incomplete multi-byte sequence, which is
   * buffered for the next call.
   */
  write(buffer: string | Buffer): string

  /**
   * Decode any remaining buffered bytes together with `buffer` and return the resulting string,
   * flushing incomplete sequences.
   * @param buffer - A final chunk of bytes to decode together with any bytes buffered from previous
   * calls.
   * @returns The decoded string, including any bytes buffered from previous calls.
   */
  end(buffer: string | Buffer): string
}
