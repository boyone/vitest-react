import { describe, expect, test } from 'vitest';
import amountSelect from './firstClassFunc';

describe('First Class Function', () => {

  test('Amount Select with Destination Weight', () => {
    const firstProductArr = [{ DEST_WEIGHT: 26000, LOST_WEIGHT: 150 }];

    const amountSelectCal = amountSelect(firstProductArr, { COND1: 'D' }, 'W');
    expect(amountSelectCal).toBe(26000);
  });

  test('Amount Select with Destination Quantity', () => {
    const secondProductArr = [{ DEST_QUANTITY: 15000, LOST_QUANTITY: 50 }];

    const amountSelectCal = amountSelect(secondProductArr, { COND1: 'D' }, 'Q');
    expect(amountSelectCal).toBe(15000);
  });

  test('Amount Select with Calculation Type A', () => {
    const amountSelectCal = amountSelect([], { }, 'A');
    expect(amountSelectCal).toBe(1);
    expect(amountSelectCal).toBe(1.0);
    expect(amountSelectCal).toBe(1.00);
  });
});
