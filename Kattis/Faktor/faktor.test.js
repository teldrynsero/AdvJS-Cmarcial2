const sum = require('./faktor');

test('10, 99 = 981', () =>
{
    expect(sum.bribes(10, 99)).toBe(981);
});

test('87, 85 = 7308', () =>
{
    expect(sum.bribes(87, 85)).toBe(7309);
});

test('1, 55 = 55', () =>
{
    expect(sum.bribes(1, 55)).toBe(55);
});