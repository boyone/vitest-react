import { describe, expect, test } from 'vitest';

describe('First Class Function', () => {
  test('Map', () => {
    const map = new Map();
    map.set('1', 1);
    map.set('Func', (value) => value + 3);

    expect(map.get('1')).toBe(1);

    const add = map.get('Func');
    expect(add(2)).toBe(5);
  });

  test('Reduce Function with Map', () => {
    const firstProductArr = [{ DEST_WEIGHT: 26000, LOST_WEIGHT: 150 }];
    const secondProductArr = [{ DEST_QUANTITY: 15000, LOST_QUANTITY: 50 }];

    const amountSelect = (products, watchType, calType) => {
      const calculation = new Map();
      calculation.set('WD', (a, v) => a + Number(v.DEST_WEIGHT));
      calculation.set('QD', (a, v) => a + Number(v.DEST_QUANTITY));

      if (!products) {
        return;
      }

      if (calType === 'A') {
        return 1.00;
      }

      return products.reduce(calculation.get(calType+watchType.COND1), 0);
    };

    const firstAmountSelectCal = amountSelect(firstProductArr, { COND1: 'D' }, 'W');
    expect(firstAmountSelectCal).toBe(26000);

    const secondAmountSelectCal = amountSelect(secondProductArr, { COND1: 'D' }, 'Q');
    expect(secondAmountSelectCal).toBe(15000);

    const thirdAmountSelectCal = amountSelect([], { }, 'A');
    expect(thirdAmountSelectCal).toBe(1);
    expect(thirdAmountSelectCal).toBe(1.0);
    expect(thirdAmountSelectCal).toBe(1.00);
  });
});
