import { parseHash } from "./Router";

describe("parseHash", () => {
  afterEach(() => {
    window.location.hash = "";
  });

  test.each(["", "#/", "#/home"])("returns home for '%s'", (hash) => {
    window.location.hash = hash;
    expect(parseHash()).toEqual({ route: "home" });
  });

  test("returns core route", () => {
    window.location.hash = "#/core";
    expect(parseHash()).toEqual({ route: "core" });
  });

  test("returns projects list default page", () => {
    window.location.hash = "#/projects";
    expect(parseHash()).toEqual({ route: "projects", page: 1 });
  });

  test("returns projects list with specific page", () => {
    window.location.hash = "#/projects?page=3";
    expect(parseHash()).toEqual({ route: "projects", page: 3 });
  });

  test("parses project slug 'thesis'", () => {
    window.location.hash = "#/projects/thesis";
    expect(parseHash()).toEqual({ route: "project", slug: "thesis" });
  });

  test("parses project slug 'unknown'", () => {
    window.location.hash = "#/projects/unknown";
    expect(parseHash()).toEqual({ route: "project", slug: "unknown" });
  });
});
