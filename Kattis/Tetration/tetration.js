function tetration(number)
{
    let tetration = 0;
    tetration = Math.pow(number, (1 / number))
    tetration = Math.round(tetration * 1000000) / 1000000
    return tetration
}

function main()
{
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.on('line', (line) => {
        var number = line;

        console.log(tetration(number));
    });
}

if (require.main === module)
{
    main();
}

module.exports =
{
    tetration: tetration
}