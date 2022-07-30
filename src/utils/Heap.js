// Time Complexity :- O(logn)
const upheapify = (heap, idx) => {
  // heap = [{first: net_value, second: person}]
  if (idx === 0) return;
  let pi = Math.floor((idx - 1) / 2);
  if (heap[pi].first < heap[idx].first) {
    let temp = heap[pi];
    heap[pi] = heap[idx];
    heap[idx] = temp;
    upheapify(heap, pi);
  } else {
    return;
  }
};

// Time Complexity :- O(logn)
const downheapify = (heap, idx) => {
  let lc = 2 * idx + 1;
  let rc = 2 * idx + 2;
  // Child Node Condition
  if (lc >= heap.length && rc >= heap.length) {
    return;
  }
  let largest = idx;
  if (lc < heap.length && heap[lc].first > heap[largest].first) {
    largest = lc;
  }
  if (rc < heap.length && heap[rc].first > heap[largest].first) {
    largest = rc;
  }
  if (largest === idx) {
    return;
  }
  let temp = heap[largest];
  heap[largest] = heap[idx];
  heap[idx] = temp;
  downheapify(heap, largest);
};

// Time Complexity :- O(logn)
const push_heap = (heap, key, val) => {
  let ob = { first: key, second: val };
  heap.push(ob);
  upheapify(heap, heap.length - 1);
};

const pop_heap = (heap) => {
  if (heap.length === 0) return 0;
  let i = heap.length - 1;
  let temp = heap[0];
  heap[0] = heap[i];
  heap[i] = temp;
  heap.pop();
  downheapify(heap, 0);
};

const heap_top = (heap) => {
  if (heap.length === 0) {
    return;
  }
  return heap[0];
};

export { push_heap, pop_heap, heap_top };
