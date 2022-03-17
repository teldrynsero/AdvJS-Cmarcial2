const greater = require('./greater');

test('100 69 = 1', () =>
{
    expect(greater.compare(100, 69)).toBe(1);
});

test('55 55 = 0', () =>
{
    expect(greater.compare(55, 55)).toBe(0);
});

test('99998 99999 = 0', () =>
{
    expect(greater.compare(99998, 99999)).toBe(0);
});