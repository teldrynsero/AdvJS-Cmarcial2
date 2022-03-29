function answer(line)
{
    String(line)
    if (line.startsWith("Simon says"))
    {
      return line.slice(10,100);;
    }
    else
    {
      return null;
    }
}

function solve()
{
    const readline = require('readline')
    const rl = readline.createInterface
    ({
      input: process.stdin,
      output: process.stdout
    });
  
    let lineNum = 0;
    let ans = [];
    let totalLines = 0;
    rl.on('line', (line) =>
    {
      if (lineNum == 0)
      {
        lineNum++;
        totalLines = parseInt(line);
      }
      else
      {
        lineNum++; 
        ans.push(answer(line));
      }

      if (lineNum == totalLines+1)
      {
        ans = ans.filter(n => n)
        console.log(ans.join("\n"));
      }
    });
}

if (require.main === module)
{
    solve();
}

module.exports =
{
  answer: answer
};