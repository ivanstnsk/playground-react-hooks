import React, { useState } from 'react';

const styles = {
  wrapper: {
    padding: 20,
  },
};

const BOOST_COST = 10;
const DOUBLE_MONEY_COST = 500;

export default function UseState() {
  const [ balance, setBalance ] = useState(10);
  const [ moneyToGet, setMoneyToGet ] = useState(1);

  const handleBuyBoost = () => {
    if (balance >= BOOST_COST) {
      setBalance(balance - BOOST_COST);
      setMoneyToGet(moneyToGet + 1);
    }
  }

  const handleDoubleMoney = () => {
    if (balance * 2 >= DOUBLE_MONEY_COST) {
      setBalance(balance * 2 - DOUBLE_MONEY_COST);
    }
  }

  return (
    <div style={styles.wrapper}>
      <p>balance: $ {balance}</p>
      <button onClick={() => setBalance(balance + moneyToGet)}>Click to get ${moneyToGet}</button>
      <button
        onClick={handleBuyBoost}
        disabled={balance < BOOST_COST}
      >Buy boost $ (cost ${BOOST_COST})</button>
      <button
        disabled={balance * 2 < DOUBLE_MONEY_COST}
        onClick={handleDoubleMoney}
      >
        Double money (cost ${DOUBLE_MONEY_COST} after operation)
      </button>
    </div>
  );
}
