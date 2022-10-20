import { expect, it, vi } from 'vitest';
import ky from 'ky';

vi.mock('ky'); // mock ky

it('mock ky.get', async () => {
  const mockUsers = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
    },
  ];

  ky.get.mockReturnValue({
    json() {
      return mockUsers;
    },
  });

  const users = await ky
    .get('https://jsonplaceholder.typicode.com/users')
    .json();

  expect(users.length).toBe(2);
});
