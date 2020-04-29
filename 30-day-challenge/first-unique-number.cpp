#include <vector>;
#include <list>;
#include <unordered_map>;

using namespace std;

class FirstUnique {
private:
    list<int> queue;
    unordered_map<int, list<int>::iterator> els;

public:
    FirstUnique(vector<int> &nums) {}

    void add(int val) {
        if (els.count(val) == 0) {
            queue.push_back(val);
            els[val] = prev(queue.end());
        } else {
            if (els[val] != queue.end()) {
                queue.erase(els[val]);
                els[val] = queue.end();
            }
        }
    }

    int showFirstUnique() {
        if (queue.size()) {
            return queue.front();
        }
        return -1;
    }
};
