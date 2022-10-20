# README

- Create project

  ```sh
  yarn create vite vitest-react --template react
  cd vitest-react
  ```

- Add dependencies

  ```sh
  yarn add --dev vitest
  yarn add ky ky-universal
  ```

- Add test script

  ```json
  "test": "vitest",
  ```

- Run test

  ```sh
  yarn test
  ```

---

## Mock with vitest

1. Mock Module: ky-mock.test.js

   - Import expect, it, vi

     ```js
     import { expect, it, vi } from 'vitest';
     ```

   - Import module

     ```js
     import ky from 'ky';
     ```

   - Mock module with vi

     ```js
     vi.mock('ky');
     ```

   - Set ky.get with return value

     ```js
     ky.get.mockReturnValue({
       json() {
         return mockUsers;
       },
     });
     ```

2. Mock Function

   - Import expect, it, vi

     ```js
     import { expect, it, vi } from 'vitest';
     ```

   - Import function

     ```js
     import CallService from './CallService';
     ```

   - Mock function with vi

     ```js
     vi.mock('./CallService.js');
     ```

   - Set CallService with return value

   ```js
   CallService = vi.fn(() => mockUsers);
   ```

---

## Reference

1. [https://vitest.dev/guide/mocking.html](https://vitest.dev/guide/mocking.html)
2. [https://jestjs.io/docs/mock-functions](https://jestjs.io/docs/mock-functions)
