// src/setupTests.js
const fs = require("fs");
const path = require("path");

if (typeof globalThis !== "undefined" && typeof globalThis.__PROJECTS_REQUIRE_CONTEXT__ !== "function") {
  globalThis.__PROJECTS_REQUIRE_CONTEXT__ = function projectsRequireContext(
    callerDir,
    relativeDir,
    scanSubDirectories = false,
    matcher = /\.\w+$/,
  ) {
    const baseDirectory = path.resolve(callerDir, relativeDir);
    const files = [];

    function readDirectory(directory) {
      fs.readdirSync(directory).forEach((file) => {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);
          return;
        }
        if (!matcher.test(fullPath)) return;
        const relativePath = path.relative(baseDirectory, fullPath).replace(/\\/g, "/");
        files.push(relativePath);
      });
    }

    readDirectory(baseDirectory);

    const context = (key) => {
      const normalizedKey = key.replace(/^\.\//, "");
      const targetPath = path.join(baseDirectory, normalizedKey);
      // eslint-disable-next-line global-require, import/no-dynamic-require
      return require(targetPath);
    };

    context.keys = () => files.map((entry) => `./${entry}`);

    return context;
  };
}

