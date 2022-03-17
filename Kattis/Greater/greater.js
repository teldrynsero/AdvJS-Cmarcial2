function compare(a,b)
{
    let compare = 0;
    if (a > b)
    {
        return 1;
    }
    else return 0;
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
        var a = parseInt(nums[0]);
        var b = parseInt(nums[1]);
        
        console.log(compare(a,b));
    });
}

if (require.main === module)
{
    main();
}

module.exports =
{
    compare: compare
}
