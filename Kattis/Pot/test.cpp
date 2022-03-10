#include <iostream>
#include <cmath>

using namespace std;

int main()
{
    int solution = 0;
    int number = 0;
    //int exponent = 0;
    int answer = 0;
    cin >> answer;

        while (answer != 0)
        {
            cin >> number;
            if (number > 9 && number < 10000) // valid
            {
                //exponent = number % 10;
                //number = number / 10;
                solution = solution + pow(number/10, number%10);
                answer--;
            }
            else // not
            {
                // try again
            }
        }

        cout << solution;

    return 0;
}