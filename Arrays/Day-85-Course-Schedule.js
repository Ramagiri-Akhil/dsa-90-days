function canFinish(numCourses, prerequisites) { 
    let graph = new Array(numCourses).fill(0).map(() => []);

    let indegree = new Array(numCourses).fill(0);

    for (let [course, prereq] of prerequisites) {
        graph[prereq].push(course);
        indegree[course]++;
    }

    let queue = [];
    for (let course = 0; course < numCourses; course++) { 
        if (indegree[course] === 0) queue.push(course);
    }

    let index = 0;
    let completed = 0;

    while (index < queue.length) { 
        let course = queue[index++];
        completed++;

        for (let nextCourse of graph[course]) { 
            indegree[nextCourse]--;
            if (indegree[nextCourse] === 0) queue.push(nextCourse);
        }
    }
    return completed === numCourses;
}