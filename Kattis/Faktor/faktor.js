function bribes(articles, impactFactor)
{
    let bribes = 0;
    bribes = articles * (impactFactor - 1); // impact factor is rounded up, so undo it for accuracy 
    bribes++; // redo rounding
    return bribes
}

function main()
{
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.on('line', (line) => {
        var nums = line.split(' ');
        var articles = parseInt(nums[0]);
        var impactFactor = parseInt(nums[1]);

        console.log(bribes(articles, impactFactor));
    });
}

if (require.main === module)
{
    main();
}

module.exports =
{
    bribes: bribes
}