export function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  change = change.toFixed(2);

  let totalCash = cid.reduce((acc, curr) => acc + curr[1], 0);

  if (totalCash < change) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    };
  }

  if (totalCash.toFixed(2) === change) {
    return {
      status: 'CLOSED',
      change: cid,
    };
  }

  let finalChange = [];

  const orderChecking = orderForCheckingChange(change);

  for (let i = orderChecking; i >= 0; i--) {
    let balance = cid[i][1];
    let changeableChange =
      Math.floor(change / currencyUnit[i]) * currencyUnit[i];

    if (changeableChange === 0) {
      continue;
    }

    if (change % currencyUnit[i] === 0 && balance >= change) {
      finalChange.push([cid[i][0], changeableChange]);
      change -= changeableChange;
      break;
    }

    if (change % currencyUnit[i] !== 0 && balance >= change) {
      finalChange.push([cid[i][0], changeableChange]);

      change -= changeableChange;
      change = change.toFixed(2);
      continue;
    }

    finalChange.push([cid[i][0], balance]);

    change -= balance;
  }

  if (change > 0) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: [],
    };
  }

  return { status: 'OPEN', change: finalChange };
}

const currencyUnit = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

function orderForCheckingChange(change) {
  for (let i = 0; i < currencyUnit.length; i++) {
    if (change < currencyUnit[i]) {
      return i - 1;
    }
  }
}
