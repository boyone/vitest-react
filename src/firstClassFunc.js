const map = new Map();
map.set('WD', (a, v) => a + Number(v.DEST_WEIGHT));
map.set('QD', (a, v) => a + Number(v.DEST_QUANTITY));
map.set('A', (a, v) => a + 1.00);

export default function (products, watchType, calType) {
  if (calType === 'A') {
    return 1.00;
  }

  if (!products) {
    return;
  }

  const key = calType + watchType.COND1;
  const calFunc = map.get(key);
  return products.reduce(calFunc, 0);
}

export function xxx(calType, products = [{}], watchType = { COND1: ''}) {
  if (!products) {
    return;
  }

  const key = calType + watchType.COND1;
  const calFunc = map.get(key);
  return products.reduce(calFunc, 0);
}