const cold = require('./cold')

test('[1, -100, 5, 300] == 1', () =>
{
    let expected = cold.answer([1, -100, 5, 300]);
    expect(expected).toBe(1);
});

test('[-10000, -500, 0, 400, 1000, -1000000] == 3', () =>
{
    expect(cold.answer([-10000, -500, 0, 400, 1000, -1000000])).toBe(3);
})

test('[1, 3, 4, 353, 4343, 1000000] == 0', () =>
{
    expect(cold.answer([1, 3, 4, 353, 4343, 1000000])).toBe(0);
})