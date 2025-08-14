import { parseHash } from './Router';

describe('parseHash', () => {
  afterEach(() => {
    window.location.hash = '';
  });

  test.each(['', '#/'])("returns home for '%s'", (hash) => {
    window.location.hash = hash;
    expect(parseHash()).toEqual({ route: 'home' });
  });

  test("parses project slug 'thesis'", () => {
    window.location.hash = '#/projects/thesis';
    expect(parseHash()).toEqual({ route: 'project', slug: 'thesis' });
  });

  test("parses project slug 'unknown'", () => {
    window.location.hash = '#/projects/unknown';
    expect(parseHash()).toEqual({ route: 'project', slug: 'unknown' });
  });
});
