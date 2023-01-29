#include <iostream>

using namespace std;

int main() {
	int n,m,k, team=0;
	cin >> n >> m >> k;
	
	while (k > 0) {
		if (n / 2 >= m)n--;
		else m--;
		k--;
	}

	while (n >= 2 && m >= 1) {
		n -= 2;
		m--;
		team++;
	}
	cout << team;
}