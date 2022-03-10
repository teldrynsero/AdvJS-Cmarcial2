const readline = require('readline');

const rl = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
});

var solution = 0;
var exponent = 0;

rl.question('', async (answer) =>
{
    for(let i = 0; i < answer; i++)
    {
        await new Promise((resolve) =>
        {
            rl.question('', (number) =>
            {
        
                exponent = number % 10; // get exponent
                number = number / 10; // get number
                number = Math.floor(number); // no decimals
        
                solution = solution + Math.pow(number, exponent); // calculate answer
                //solution = Math.floor(solution); // no decimals

                resolve();
            });
        })
    }
    console.log(solution);
    process.exit(0); 
});
