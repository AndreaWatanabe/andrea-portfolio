import { readFileSync } from "node:fs";
import path from "node:path";

export type ImageSize = { width: number; height: number };

/**
 * Reads a JPEG or PNG's real pixel dimensions off disk at build time.
 *
 * `next/image` needs width and height to reserve space, and we want the
 * photo's own proportions rather than a fixed crop — so rather than
 * hardcoding numbers that rot the moment a photo is swapped, the header is
 * parsed from the file itself. Replace the file and the layout follows.
 */
const publicDir = path.join(process.cwd(), "public");

function readPng(buf: Buffer): ImageSize | null {
  // IHDR is the first chunk: width and height are two big-endian uint32s.
  if (buf.length < 24) return null;
  if (buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

function readJpeg(buf: Buffer): ImageSize | null {
  if (buf.length < 4 || buf.readUInt16BE(0) !== 0xffd8) return null;

  let offset = 2;
  while (offset + 9 < buf.length) {
    if (buf[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    const marker = buf[offset + 1];

    // SOF0/1/2/9/10 carry the frame dimensions. SOF4 and SOF12 do not.
    const isFrameHeader =
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf);

    if (isFrameHeader) {
      return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7) };
    }

    // Standalone markers carry no length field.
    if (marker === 0xd8 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
      offset += 2;
      continue;
    }

    offset += 2 + buf.readUInt16BE(offset + 2);
  }

  return null;
}

/** Falls back to a 4:3 box if the file is missing or an unexpected format. */
export function getImageSize(src: string): ImageSize {
  const fallback = { width: 1600, height: 1200 };

  try {
    const buf = readFileSync(path.join(publicDir, src.replace(/^\//, "")));
    return readPng(buf) ?? readJpeg(buf) ?? fallback;
  } catch {
    return fallback;
  }
}
