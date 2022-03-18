
const find = require('./finding');

test('apple = apple', () =>
{
    expect(find.answer("apple")).toBe("apple");
});

test('pear = ar', () =>
{
    expect(find.answer("pear")).toBe("ar");
});

test('pistachio = achio', () =>
{
    expect(find.answer("pistachio")).toBe("achio");
});