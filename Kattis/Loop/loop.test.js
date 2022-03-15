const sum = require('./loop');

test('3 = 3 Abracadabra', () =>
{
    expect(sum.answer(3)).toBe("1 Abracadabra\n2 Abracadabra\n3 Abracadabra");
});

test('8 = 8 Abracadabra', () =>
{
    expect(sum.answer(8)).toBe("1 Abracadabra\n2 Abracadabra\n3 Abracadabra\n4 Abracadabra\n5 Abracadabra\n6 Abracadabra\n7 Abracadabra\n8 Abracadabra");
});

test('11 = 11 Abracadabra', () =>
{
    expect(sum.answer(11)).toBe("1 Abracadabra\n2 Abracadabra\n3 Abracadabra\n4 Abracadabra\n5 Abracadabra\n6 Abracadabra\n7 Abracadabra\n8 Abracadabra\n9 Abracadabra\n10 Abracadabra\n11 Abracadabra");
});