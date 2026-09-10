function networkDelayTime(times, n, k) {
  let graph = Array.from({ length: n + 1 }, () => []);

  for (let [u, v, w] of times) {
    graph[u].push([v, w]);
  }

  let dist = new Array(n + 1).fill(Infinity);

  dist[k] = 0;

  let heap = [[0, k]];

  function push(item) {
    heap.push(item);

    let index = heap.length - 1;

    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (heap[parent][0] <= heap[index][0]) {
        break;
      }

      [heap[parent], heap[index]] = [heap[index], heap[parent]];

      index = parent;
    }
  }

  function pop() {
    if (heap.length === 1) {
      return heap.pop();
    }

    let result = heap[0];

    heap[0] = heap.pop();

    let index = 0;

    while (true) {
      let left = index * 2 + 1;
      let right = index * 2 + 2;

      let smallest = index;

      if (left < heap.length && heap[left][0] < heap[smallest][0]) {
        smallest = left;
      }

      if (right < heap.length && heap[right][0] < heap[smallest][0]) {
        smallest = right;
      }

      if (smallest === index) {
        break;
      }

      [heap[index], heap[smallest]] = [heap[smallest], heap[index]];

      index = smallest;
    }

    return result;
  }

  while (heap.length > 0) {
    let [currentDistance, node] = pop();

    if (currentDistance > dist[node]) {
      continue;
    }

    for (let [neighbor, weight] of graph[node]) {
      let newDistance = currentDistance + weight;

      if (newDistance < dist[neighbor]) {
        dist[neighbor] = newDistance;

        push([newDistance, neighbor]);
      }
    }
  }

  let answer = 0;

  for (let node = 1; node <= n; node++) {
    if (dist[node] === Infinity) {
      return -1;
    }

    answer = Math.max(answer, dist[node]);
  }

  return answer;
};
