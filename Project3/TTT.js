function reset() // When Start Over button pressed, reset game
{
    document.getElementById("s1").value = "";
    document.getElementById("s2").value = "";
    document.getElementById("s3").value = "";
    document.getElementById("s4").value = "";
    document.getElementById("s5").value = "";
    document.getElementById("s6").value = "";
    document.getElementById("s7").value = "";
    document.getElementById("s8").value = "";
    document.getElementById("s9").value = "";

    document.getElementById("result").innerHTML = "";
    
    currentPlayer = 1;
    document.getElementById("turn").innerHTML = "Player 1's turn";
}

function win() // Has there been a win yet?
{
    var s1 = document.getElementById("s1").value
    var s2 = document.getElementById("s2").value
    var s3 = document.getElementById("s3").value
    var s4 = document.getElementById("s4").value
    var s5 = document.getElementById("s5").value
    var s6 = document.getElementById("s6").value
    var s7 = document.getElementById("s7").value
    var s8 = document.getElementById("s8").value
    var s9 = document.getElementById("s9").value

    // Top row, horizontal
    if (s1 == "X" && s2 == "X" && s3 == "X")
    {
        document.getElementById("result").innerHTML = "Player 2 won!!!";
    }
    else if (s1 == "O" && s2 == "O" && s3 == "O")
    {
        document.getElementById("result").innerHTML = "Player 1 won!!!";
    }

    // Middle row, horizontal
    else if (s4 == "X" && s5 == "X" && s6 == "X")
    {
        document.getElementById("result").innerHTML = "Player 2 won!!!";
    }
    else if (s4 == "O" && s5 == "O" && s6 == "O")
    {
        document.getElementById("result").innerHTML = "Player 1 won!!!";
    }

    // Bottom row, horizontal
    else if (s7 == "X" && s8 == "X" && s9 == "X")
    {
        document.getElementById("result").innerHTML = "Player 2 won!!!";
    }
    else if (s7 == "O" && s8 == "O" && s9 == "O")
    {
        document.getElementById("result").innerHTML = "Player 1 won!!!";
    }

    // First row, vertical
    else if (s1 == "X" && s4 == "X" && s7 == "X")
    {
        document.getElementById("result").innerHTML = "Player 2 won!!!";
    }
    else if (s1 == "O" && s4 == "O" && s7 == "O")
    {
        document.getElementById("result").innerHTML = "Player 1 won!!!";
    }

    // Second row, vertical
    else if (s2 == "X" && s5 == "X" && s8 == "X")
    {
        document.getElementById("result").innerHTML = "Player 2 won!!!";
    }
    else if (s2 == "O" && s5 == "O" && s8 == "O")
    {
        document.getElementById("result").innerHTML = "Player 1 won!!!";
    }

    // Third row, vertical
    else if (s3 == "X" && s6 == "X" && s9 == "X")
    {
        document.getElementById("result").innerHTML = "Player 2 won!!!";
    }
    else if (s3 == "O" && s6 == "O" && s9 == "O")
    {
        document.getElementById("result").innerHTML = "Player 1 won!!!";
    }

    // Diagonals
    else if (s1 == "X" && s5 == "X" && s9 == "X")
    {
        document.getElementById("result").innerHTML = "Player 2 won!!!";
    }
    else if (s1 == "O" && s5 == "O" && s9 == "O")
    {
        document.getElementById("result").innerHTML = "Player 1 won!!!";
    }

    else if (s3 == "X" && s5 == "X" && s7 == "X")
    {
        document.getElementById("result").innerHTML = "Player 2 won!!!";
    }
    else if (s3 == "O" && s5 == "O" && s7 == "O")
    {
        document.getElementById("result").innerHTML = "Player 1 won!!!";
    }
}

currentPlayer = 1; // player 1 = 1, player 2 = 2

// Move functions take user input and put the appropriate symbol in the selected square

function move1()
{
    if (currentPlayer == 1) // player 1's turn
    {
        document.getElementById("s1").value = "O";
        currentPlayer = 2;
        document.getElementById("turn").innerHTML = "Player 2's turn";
    }
    else if (currentPlayer == 2) // player 1's turn
    {
        document.getElementById("s1").value = "X";
        currentPlayer = 1;
        document.getElementById("turn").innerHTML = "Player 1's turn";
    }
}

function move2()
{
    if (currentPlayer == 1) // player 1's turn
    {
        document.getElementById("s2").value = "O";
        currentPlayer = 2;
        document.getElementById("turn").innerHTML = "Player 2's turn";
    }
    else if (currentPlayer == 2) // player 1's turn
    {
        document.getElementById("s2").value = "X";
        currentPlayer = 1;
        document.getElementById("turn").innerHTML = "Player 1's turn";
    }
}

function move3()
{
    if (currentPlayer == 1) // player 1's turn
    {
        document.getElementById("s3").value = "O";
        currentPlayer = 2;
        document.getElementById("turn").innerHTML = "Player 2's turn";
    }
    else if (currentPlayer == 2) // player 1's turn
    {
        document.getElementById("s3").value = "X";
        currentPlayer = 1;
        document.getElementById("turn").innerHTML = "Player 1's turn";
    }
}

function move4()
{
    if (currentPlayer == 1) // player 1's turn
    {
        document.getElementById("s4").value = "O";
        currentPlayer = 2;
        document.getElementById("turn").innerHTML = "Player 2's turn";
    }
    else if (currentPlayer == 2) // player 1's turn
    {
        document.getElementById("s4").value = "X";
        currentPlayer = 1;
        document.getElementById("turn").innerHTML = "Player 1's turn";
    }
}

function move5()
{
    if (currentPlayer == 1) // player 1's turn
    {
        document.getElementById("s5").value = "O";
        currentPlayer = 2;
        document.getElementById("turn").innerHTML = "Player 2's turn";
    }
    else if (currentPlayer == 2) // player 1's turn
    {
        document.getElementById("s5").value = "X";
        currentPlayer = 1;
        document.getElementById("turn").innerHTML = "Player 1's turn";
    }
}

function move6()
{
    if (currentPlayer == 1) // player 1's turn
    {
        document.getElementById("s6").value = "O";
        currentPlayer = 2;
        document.getElementById("turn").innerHTML = "Player 2's turn";
    }
    else if (currentPlayer == 2) // player 1's turn
    {
        document.getElementById("s6").value = "X";
        currentPlayer = 1;
        document.getElementById("turn").innerHTML = "Player 1's turn";
    }
}

function move7()
{
    if (currentPlayer == 1) // player 1's turn
    {
        document.getElementById("s7").value = "O";
        currentPlayer = 2;
        document.getElementById("turn").innerHTML = "Player 2's turn";
    }
    else if (currentPlayer == 2) // player 1's turn
    {
        document.getElementById("s7").value = "X";
        currentPlayer = 1;
        document.getElementById("turn").innerHTML = "Player 1's turn";
    }
}

function move8()
{
    if (currentPlayer == 1) // player 1's turn
    {
        document.getElementById("s8").value = "O";
        currentPlayer = 2;
        document.getElementById("turn").innerHTML = "Player 2's turn";
    }
    else if (currentPlayer == 2) // player 1's turn
    {
        document.getElementById("s8").value = "X";
        currentPlayer = 1;
        document.getElementById("turn").innerHTML = "Player 1's turn";
    }
}

function move9()
{
    if (currentPlayer == 1) // player 1's turn
    {
        document.getElementById("s9").value = "O";
        currentPlayer = 2;
        document.getElementById("turn").innerHTML = "Player 2's turn";
    }
    else if (currentPlayer == 2) // player 1's turn
    {
        document.getElementById("s9").value = "X";
        currentPlayer = 1;
        document.getElementById("turn").innerHTML = "Player 1's turn";
    }
}