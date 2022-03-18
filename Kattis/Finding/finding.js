function answer(word)
{
    //let answer = '';
    //let answer = word.search("a");
    var split = word.indexOf('a');
    var beginning = word.substr(0, split);
    var answer = word.substr(split);
    return answer;
}

function main()
{
    const readline = require('readline');

    const rl = readline.createInterface
    ({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.on('line', (word) => {

        console.log(answer(word));
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