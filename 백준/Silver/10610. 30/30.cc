#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool desc(int a, int b) {
	return a > b;
}

int main(void)
{
	vector<int> v;
	long long sum = 0;
	string s;
	cin >> s;

	for (int i = 0; i < s.size(); i++) {
		v.push_back(s[i] - '0');
		sum += s[i] - '0';
	}
	
	sort(v.begin(), v.end(),desc);
	
	if (sum % 3 != 0 || v[v.size() - 1] != 0) {
		cout << -1;
		return 0;
	}
	
	for (auto n : v)
		cout << n;
}