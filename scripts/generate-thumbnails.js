#!/usr/bin/env node

"use strict";

const fs = require("fs/promises");
const path = require("path");
const sharp = require("sharp");

const [, , rootArg] = process.argv;
const IMAGE_ROOT = path.resolve(
  rootArg || path.join(__dirname, "..", "public", "images", "projects")
);
const MAX_WIDTH = Number(process.env.THUMB_MAX_WIDTH) || 640;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(entryPath);
    return entryPath;
  }));
  return files.flat();
}

function isOptimisable(file) {
  const ext = path.extname(file).toLowerCase();
  if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) return false;
  return !file.includes(".thumb.");
}

async function ensureThumb(file) {
  const { dir, name, ext } = path.parse(file);
  const thumbName = `${name}.thumb${ext}`;
  const thumbPath = path.join(dir, thumbName);

  const originalStat = await fs.stat(file);
  try {
    const thumbStat = await fs.stat(thumbPath);
    if (thumbStat.mtimeMs >= originalStat.mtimeMs) {
      return { status: "skipped", file };
    }
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
  }

  const image = sharp(file).resize({
    width: MAX_WIDTH,
    withoutEnlargement: true,
  });

  const lowerExt = ext.toLowerCase();
  if (lowerExt === ".png") {
    image.png({ compressionLevel: 9, adaptiveFiltering: true });
  } else if (lowerExt === ".jpg" || lowerExt === ".jpeg") {
    image.jpeg({ quality: 78, progressive: true });
  } else if (lowerExt === ".webp") {
    image.webp({ quality: 78 });
  }

  await image.toFile(thumbPath);
  return { status: "generated", file, thumbPath };
}

async function main() {
  try {
    const entries = await walk(IMAGE_ROOT);
    const targets = entries.filter(isOptimisable);

    if (!targets.length) {
      console.log(`No source images found under ${IMAGE_ROOT}`);
      return;
    }

    for (const file of targets) {
      try {
        const result = await ensureThumb(file);
        if (result.status === "generated") {
          console.log(`Generated ${path.relative(IMAGE_ROOT, result.thumbPath)}`);
        } else {
          console.log(`Up to date ${path.relative(IMAGE_ROOT, file)}`);
        }
      } catch (error) {
        console.error(`Failed to process ${file}:`, error.message);
      }
    }

    console.log("Thumbnail generation complete.");
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();
