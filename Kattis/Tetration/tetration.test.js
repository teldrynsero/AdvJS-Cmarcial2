const ans = require('./tetration');

test('2.700000 = 1.444656', () =>
{
    expect(ans.tetration(2.700000)).toBe(1.444656);
});

test('0.300000 = 0.018075', () =>
{
    expect(ans.tetration(0.300000)).toBe(0.018075);
});

test('0.500000 = 0.', () =>
{
    expect(ans.tetration(0.500000)).toBe(0.25);
});