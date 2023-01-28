#include <iostream>

using namespace std;

int main()
{
    int n, k;
    cin >> n >> k;
    int a[11], sum = 0;
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    for (int i = n - 1; i >= 0; i--)
    {
        sum += k / a[i];
        k = k % a[i];
    }
    cout << sum;
}