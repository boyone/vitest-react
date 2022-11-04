const calculation = new Map();
calculation.set('WD', (a, v) => a + Number(v.DEST_WEIGHT));
calculation.set('QD', (a, v) => a + Number(v.DEST_QUANTITY));

export default function (products, watchType, calType) {
  if (!products) {
    return;
  }

  if (calType === 'A') {
    return 1.00;
  }

  return products.reduce(calculation.get(calType + watchType.COND1), 0);
}
