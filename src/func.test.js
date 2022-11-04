// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions#constructor_vs._declaration_vs._expression

import { describe, expect, test } from 'vitest';

describe('Function', () => {
  test('declaration', () => {
    function add(left, right) {
      return left + right;
    }

    expect(add(2, 3)).toBe(5);
  });

  test('expression', () => {
    const add = function (left, right) {
      return left + right;
    };

    expect(add(2, 3)).toBe(5);
  });

  test('arrow function expression', () => {
    const add = (left, right) => {
      return left + right;
    };

    expect(add(2, 3)).toBe(5);
  });

  test('constructor', () => {
    const add = new Function('left', 'right', 'return left + right');

    expect(add(2, 3)).toBe(5);
  });

  test('generator function', () => {
    function* generator(i) {
      yield i;
      yield i + 3;
    }

    const addTwo = generator(2);
    expect(addTwo.next().value).toBe(2);
    expect(addTwo.next().value).toBe(5);
  });

  test('generator function construtor', () => {
    const add = function* (i) {
        yield i;
        yield i + 3;
      }
  
      const result = add(2);
      
      expect(result.next().value).toBe(2);
      expect(result.next().value).toBe(5);
  });

  test('curry', () => {
    const add = (base) => {
        return (value) => value + base;
    }

    const threePlus = add(3);

    expect(threePlus(2)).toBe(5);
    expect(threePlus(4)).toBe(7);
  });

  test('anonymous', () => {
    expect((function(){ return 2 + 3; })()).toBe(5);
  });

});
