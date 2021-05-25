import { Buffer } from "buffer";
import { createHash } from "crypto";
import byteLength from "../bytelength";
import { RawData } from "../upload-manager";

interface Buffers {
  chunks: Buffer[];
  length: number;
}

export async function* ChunkStream<T>(
  data: T,
  partSize: number,
  getNextData: (data: T) => AsyncGenerator<Buffer>
): AsyncGenerator<RawData, void, undefined> {
  const currentBuffer: Buffers = { chunks: [], length: 0 };
  let content;
  let size;
  let md5Hash;
  for await (const datum of getNextData(data)) {
    currentBuffer.chunks.push(datum);
    currentBuffer.length += datum.length;

    while (currentBuffer.length >= partSize) {
      const dataChunk =
        currentBuffer.chunks.length > 1
          ? Buffer.concat(currentBuffer.chunks)
          : currentBuffer.chunks[0];
      content = dataChunk.slice(0, partSize);
      md5Hash = createHash("md5");
      md5Hash.update(content);
      size = byteLength(content);
      yield {
        size: size,
        data: content,
        md5Hash: md5Hash.digest("base64")
      };

      // Reset buffer.
      currentBuffer.chunks = [dataChunk.slice(partSize)];
      currentBuffer.length = currentBuffer.chunks[0].length;
    }
  }
  content = Buffer.concat(currentBuffer.chunks);
  size = byteLength(content);
  md5Hash = createHash("md5");
  md5Hash.update(content);
  yield {
    size: size,
    data: content,
    md5Hash: md5Hash.digest("base64")
  };
}
