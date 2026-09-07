# Course Schedule — LeetCode #207

## 🧠 Approach: Topological Sort + BFS (Kahn's Algorithm)

The problem asks whether it is possible to finish all courses given their prerequisites.

We can represent the courses as a **directed graph**:

```text
[course, prerequisite]

[1, 0] → 0 → 1
[2, 1] → 1 → 2
```

This means we must complete `0` before `1`, and `1` before `2`.

The key idea is to use **indegree**:

> `indegree[course]` = number of prerequisites that course still has.

Courses with `indegree === 0` have no prerequisites, so we can take them first.

---

## 🔑 How It Works

1. Create an adjacency list to represent the graph.
2. Calculate the indegree of every course.
3. Put all courses with `indegree === 0` into the queue.
4. Process courses using BFS.
5. When a course is completed, reduce the indegree of its dependent courses.
6. If a dependent course's indegree becomes `0`, add it to the queue.
7. Finally, check whether we processed all courses.

If we cannot process every course, there is a **cycle**, meaning the courses cannot all be completed.

### Example

```text
0 → 1 → 2 → 3
```

Initially:

```text
indegree = [0, 1, 1, 1]
queue = [0]
```

Process `0`:

```text
indegree[1] → 0
queue = [0, 1]
```

Process `1`:

```text
indegree[2] → 0
queue = [0, 1, 2]
```

Process `2`:

```text
indegree[3] → 0
queue = [0, 1, 2, 3]
```

All 4 courses were processed, so we return `true`.

---

## 💻 JavaScript Solution

```js
var canFinish = function(numCourses, prerequisites) {

    // Create adjacency list
    let graph = new Array(numCourses)
        .fill(0)
        .map(() => []);

    // Store number of prerequisites for each course
    let indegree = new Array(numCourses).fill(0);

    // Build graph and calculate indegree
    for (let [course, prerequisite] of prerequisites) {

        graph[prerequisite].push(course);

        indegree[course]++;
    }

    // Add courses with no prerequisites
    let queue = [];

    for (let course = 0; course < numCourses; course++) {

        if (indegree[course] === 0) {
            queue.push(course);
        }
    }

    let index = 0;
    let completed = 0;

    // BFS
    while (index < queue.length) {

        let course = queue[index++];

        completed++;

        // Process courses that depend on this course
        for (let nextCourse of graph[course]) {

            indegree[nextCourse]--;

            // All prerequisites are completed
            if (indegree[nextCourse] === 0) {
                queue.push(nextCourse);
            }
        }
    }

    // If all courses were processed, no cycle exists
    return completed === numCourses;
};
```

## ⏱️ Complexity

* **Time:** `O(V + E)`

  * `V` = number of courses
  * `E` = number of prerequisite relationships
* **Space:** `O(V + E)`

### 💡 Key Takeaway

The most important concept here is:

> **Indegree = number of prerequisites still blocking a course.**

When `indegree` becomes `0`, the course is ready to be taken and enters the queue. If some courses can never reach `0`, there's a **cycle**, so we return `false`. 🚀
