function answer(number)
{
    let answer = "";

    var result = 0;

    var i = 0;

    result = (i + 1) + " Abracadabra"
    answer = result;
    i++;

    for (i = 1; i < number; i++)
    {
        result = (i + 1) + " Abracadabra"

        answer = answer + '\n' + result;

        //console.log(result)
    }

    return answer;

    /* answer = "";
    //result.toString();
    answer = result + answer;
    return answer; */
}

function main()
{
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (number) => {
        //var number = line;
        console.log(answer(number))
    });
}

if (require.main === module)
{
    main();
}

module.exports =
{
    answer: answer
}