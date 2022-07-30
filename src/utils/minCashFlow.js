import { push_heap, pop_heap, heap_top } from "./Heap";
import PersonExpense from "../classes/expense";
// logic is inspired from https://www.geeksforgeeks.org/minimize-cash-flow-among-given-set-friends-borrowed-money/
// transactions = [{person1: 'John Doe', person2: 'Doe John', amount: 100}]
const minCashFlow = (transactions) => {
  let net_amount = {}; // hashmap for net balance
  for (let i = 0; i < transactions.length; i++) {
    let e = transactions[i]; // e is an object of expense class
    // person1 is the payer so he is under a credit
    // If a person already exist in map then update(+= or -=) money otherwise just add into map.
    if (e.person1 in net_amount) {
      net_amount[e.person1] += e.amount;
    } else {
      net_amount[e.person1] = e.amount;
    }
    // person2 is the payee so he is under a debit
    if (e.person2 in net_amount) {
      net_amount[e.person2] -= e.amount;
    } else {
      net_amount[e.person2] = -e.amount;
    }
  }
  const creditholders = []; // heap of credit holders
  const debitholders = []; // heap of debit holders
  for (const p in net_amount) {
    if (net_amount[p] > 0) {
      push_heap(creditholders, net_amount[p], p);
    } else {
      push_heap(debitholders, -1 * net_amount[p], p);
    }
  }
  const result = []; // array of expense objects
  while (creditholders.length > 0) {
    let p1 = heap_top(creditholders); // p1 = {Amount,Person}
    let p2 = heap_top(debitholders);
    pop_heap(creditholders);
    pop_heap(debitholders);
    // The person with minimum of two is our first person to be settled
    let tmp = new PersonExpense(
      p2.second,
      p1.second,
      Math.min(p1.first, p2.first)
    );
    result.push(tmp);
    if (p1.first > p2.first) {
      push_heap(creditholders, p1.first - p2.first, p1.second);
    } else if (p1.first < p2.first) {
      push_heap(debitholders, p2.first - p1.first, p2.second);
    }
  }
  return result;
};

export { minCashFlow };
