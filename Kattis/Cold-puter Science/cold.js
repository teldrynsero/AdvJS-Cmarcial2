// function takes array of numbers and returns count of negative numbers
function answer(temps)
{
    let count = 0;
    for (let t of temps)
    {
        if (t < 0) count++;
    }
    return count;
}

// function takes temp as a string of numbers separated by space
//function answer1


function main()
{
    // read input
    // call answer
    // print answer
    const readline = require('readline');
    const rli = readline.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    });
    let lineNum = 1;
    let tempCount;
    rli.on('line', (line) =>
    {
        if (lineNum === 1)
        {
            tempCount = parseInt(line);
            lineNum++;
        }
        else
        {
            // array of numbers
            let temps = line.split(' ').map(Number);
            //console.log(temps);
            console.log(answer(temps));
        }
    });
}

if (require.main === module)
{
    main();
}

module.exports =
{
    answer: answer
//    answer1: answer1
}