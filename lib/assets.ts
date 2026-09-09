import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Optional files the owner can drop into `public/` at any time.
 * Resolved on the server at build time, so the portrait and résumé
 * button simply appear once the file exists — and nothing breaks
 * while it doesn't.
 */
const publicDir = path.join(process.cwd(), "public");

function firstExisting(names: string[]) {
  const found = names.find((name) => existsSync(path.join(publicDir, name)));
  return found ? `/${found}` : null;
}

export const photoSrc = firstExisting([
  "photo.jpg",
  "photo.jpeg",
  "photo.png",
  "photo.webp",
]);

export const resumeSrc = firstExisting(["resume.pdf", "cv.pdf"]);

export const hasPhoto = photoSrc !== null;
export const hasResume = resumeSrc !== null;
