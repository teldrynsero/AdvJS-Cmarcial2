const ans = require('./simon');

test('1, Simon says eat a pepper. = eat a pepper.', () =>
{
    expect(ans.answer(1, "Simon says eat a pepper.")).toBe(" eat a pepper.");
});

test('3, Stomp twice, kick thrice, Simon says jump once. = jump once.', () =>
{
    expect(ans.answer(3, "Stomp twice.", "kick thrice.", "Simon says jump once")).toBe(" jump once.");
});

test('5, Simon says wave, Simon says bow, Simon says sing, jump around, Simon says eat a skittle = wave, bow, sing, eat a skittle', () =>
{
    expect(ans.answer(5, "Simon says wave", "Simon says bow", "Simon says sing", "jump around", "Simon says eat a skittle")).toBe(" wave/n bow/n sing/n eat a skittle");
});
