import { existsSync } from "node:fs";
import path from "node:path";

/**
 * Optional files the owner can drop into `public/` at any time.
 *
 * These are looked up per render rather than once at module load, so during
 * `next dev` adding the file and refreshing is enough — no server restart.
 * In a production build they resolve while the page is prerendered, so a
 * rebuild (or a push, on Vercel) picks the file up.
 */
const publicDir = path.join(process.cwd(), "public");

function firstExisting(names: string[]) {
  const found = names.find((name) => existsSync(path.join(publicDir, name)));
  return found ? `/${found}` : null;
}

/** Portrait for the About page. */
export function getPhotoSrc() {
  return firstExisting(["photo.jpg", "photo.jpeg", "photo.png", "photo.webp"]);
}

/** CV, offered as a download wherever it is linked. */
export function getResumeSrc() {
  return firstExisting(["resume.pdf", "cv.pdf"]);
}
